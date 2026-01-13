import { loadPage, updateBodyClass } from "./../js/utils/loadPage.js";
import { loadComponent } from "./../js/utils/loadComponent.js";
import { modalVizInit } from "./../js/utils/loadViz.js";
import * as bootstrap from "bootstrap";

/* ---------------------------------------------------
   RUTAS
--------------------------------------------------- */
const routes = {
    "/": {
        page: "pages/home.html",
        title: "Home",
        bodyClass: "page-home",
        loader: () => import("../js/pages/home.js"),
    },
    "/physicalizing-emotions": {
        page: "pages/physicalizing.html",
        title: "Physicalizing Emotions",
        bodyClass: "page-physicalizing",
        loader: () => import("../js/pages/physicalizing.js"),
    },
    "/visualization": {
        page: "pages/visualization.html",
        title: "Visualization",
        bodyClass: "page-visualization",
        loader: () => import("../js/pages/visualization.js"),
    },
    "/visualization/periods": {
        page: "pages/periods.html",
        title: "Visualization — Periods",
        bodyClass: "page-periods",
        loader: () => import("../js/pages/periods.js"),
    },
    "/about": {
        page: "pages/about.html",
        title: "About",
        bodyClass: "page-about",
        loader: () => import("../js/pages/about.js"),
    },
    "/epilogue": {
        page: "pages/epilogue.html",
        title: "Epilogue",
        bodyClass: "page-epilogue",
        loader: () => import("../js/pages/epilogue.js"),
    },
};

/* ---------------------------------------------------
   BASE PATH (Vite)
--------------------------------------------------- */
const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");

/* ---------------------------------------------------
   ESTADO GLOBAL DEL ROUTER
--------------------------------------------------- */
let currentPageModule = null;
let pendingModalViz = false;

/* ---------------------------------------------------
   FUNCIÓN PARA LIMPIAR RECURSOS GLOBALES
--------------------------------------------------- */
function cleanupGlobalResources() {
    // Cancelar todos los requestAnimationFrame activos
    let id = window.requestAnimationFrame(() => {});
    while (id--) {
        window.cancelAnimationFrame(id);
    }

    // Limpiar todos los timeouts e intervals
    const highestTimeoutId = setTimeout(() => {}, 0);
    for (let i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
    }

    const highestIntervalId = setInterval(() => {}, 0);
    for (let i = 0; i < highestIntervalId; i++) {
        clearInterval(i);
    }

    // Remover event listeners de window y document (los más comunes)
    const eventsToClean = [
        "scroll",
        "resize",
        "mousemove",
        "click",
        "keydown",
        "keyup",
    ];
    eventsToClean.forEach((event) => {
        // Clonamos window y document para remover todos sus listeners
        // Nota: esto no funciona directamente, pero los handlers individuales sí
    });

    // Limpiar elementos canvas de Three.js si existen
    const canvasElements = document.querySelectorAll("canvas");
    canvasElements.forEach((canvas) => {
        // Obtener el contexto y limpiar
        const gl = canvas.getContext("webgl") || canvas.getContext("webgl2");
        if (gl) {
            const loseContext = gl.getExtension("WEBGL_lose_context");
            if (loseContext) loseContext.loseContext();
        }
        canvas.remove();
    });
}

/* ---------------------------------------------------
   ROUTE HANDLER
--------------------------------------------------- */
const handleRoute = async () => {
    let path = window.location.pathname;

    if (BASE_PATH !== "/" && path.startsWith(BASE_PATH)) {
        path = path.slice(BASE_PATH.length);
    }

    path = path || "/";
    if (!path.startsWith("/")) path = "/" + path;

    const route = routes[path] || routes["/"];

    /* ---------------------------------------------
       🔥 DESTROY PÁGINA ANTERIOR
    --------------------------------------------- */
    if (currentPageModule?.destroy) {
        try {
            await currentPageModule.destroy();
        } catch (err) {
            console.warn("Error en destroy():", err);
        }
    }
    currentPageModule = null;

    /* ---------------------------------------------
       🧼 LIMPIAR RECURSOS GLOBALES
    --------------------------------------------- */
    cleanupGlobalResources();

    /* ---------------------------------------------
       🧼 LIMPIAR VIEW (MATA LISTENERS)
    --------------------------------------------- */
    const view = document.querySelector("[data-router-view]");
    if (view) {
        // Limpiar completamente el contenido
        view.innerHTML = "";
        // Reemplazar el nodo para eliminar todos los event listeners
        const newView = view.cloneNode(false);
        view.parentNode.replaceChild(newView, view);
    }

    /* ---------------------------------------------
       META / BODY
    --------------------------------------------- */
    document.title = route.title;
    updateBodyClass(route.bodyClass);

    /* ---------------------------------------------
       HTML
    --------------------------------------------- */
    await loadPage(route.page);

    /* ---------------------------------------------
       HEADER DINÁMICO
    --------------------------------------------- */
    const headerPath =
        path === "/visualization/periods"
            ? "componets/header-interior.html"
            : "componets/header.html";

    await loadComponent("#header", headerPath);

    /* ---------------------------------------------
       JS DE LA PÁGINA
    --------------------------------------------- */
    if (route.loader) {
        try {
            // Usar import dinámico con timestamp para forzar recarga
            const module = await route.loader();

            if (module?.init) {
                await module.init();
                currentPageModule = module;
            }
        } catch (err) {
            console.error("Error cargando módulo de página:", err);
        }
    }

    /* ---------------------------------------------
       MODAL POST NAVEGACIÓN
    --------------------------------------------- */
    if (route.page.includes("visualization") && pendingModalViz) {
        pendingModalViz = false;
        setTimeout(() => modalVizInit(), 0);
    }

    /* ---------------------------------------------
       BOOTSTRAP CLEANUP
    --------------------------------------------- */
    const offcanvasEl = document.getElementById("offcanvasDarkNavbar");
    if (offcanvasEl) {
        const instance = bootstrap.Offcanvas.getInstance(offcanvasEl);
        if (instance) instance.hide();
    }

    // Limpiar clases de Bootstrap
    document.body.classList.remove("overflow-hidden", "modal-open");
    document.body.removeAttribute("style");

    // Remover backdrops de Bootstrap que puedan quedar
    const backdrops = document.querySelectorAll(
        ".modal-backdrop, .offcanvas-backdrop"
    );
    backdrops.forEach((backdrop) => backdrop.remove());

    window.scrollTo(0, 0);
};

/* ---------------------------------------------------
   INIT ROUTER
--------------------------------------------------- */
export function initRouter() {
    const view = document.querySelector("[data-router-view]");
    if (!view) return;

    document.addEventListener("click", (e) => {
        const link = e.target.closest("[data-link]");
        if (!link) return;

        const url = new URL(link.href);

        if (url.origin !== window.location.origin) return;

        if (link.classList.contains("link-back")) {
            pendingModalViz = true;
        }

        e.preventDefault();

        let newPath = url.pathname;

        if (BASE_PATH !== "/" && newPath.startsWith(BASE_PATH)) {
            newPath = newPath.slice(BASE_PATH.length) || "/";
        }

        newPath = BASE_PATH === "/" ? newPath : BASE_PATH + newPath;

        history.pushState({}, "", newPath);
        handleRoute();
    });

    window.addEventListener("popstate", handleRoute);

    handleRoute();
}
