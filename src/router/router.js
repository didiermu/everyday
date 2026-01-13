import { loadPage, updateBodyClass } from "./../js/utils/loadPage.js";
import { loadComponent } from "./../js/utils/loadComponent.js";
import { modalVizInit } from "./../js/utils/loadViz.js";
import * as bootstrap from "bootstrap";

/**
 * Definición de rutas
 */
const routes = {
    "/": {
        page: "pages/home.html",
        title: "Home",
        bodyClass: "page-home",
        init: async () => {
            const { init } = await import("../js/pages/home.js");
            init();
        },
    },
    "/physicalizing-emotions": {
        page: "pages/physicalizing.html",
        title: "Physicalizing Emotions",
        bodyClass: "page-physicalizing",
        init: async () => {
            const { init } = await import("../js/pages/physicalizing.js");
            init();
        },
    },
    "/visualization": {
        page: "pages/visualization.html",
        title: "Visualization",
        bodyClass: "page-visualization",
        init: async () => {
            const { init } = await import("../js/pages/visualization.js");
            init();
        },
    },
    "/visualization/periods": {
        page: "pages/periods.html",
        title: "Visualization - Periods",
        bodyClass: "page-periods",
        init: async () => {
            const { init } = await import("../js/pages/periods.js");
            init();
        },
    },
    "/about": {
        page: "pages/about.html",
        title: "About",
        bodyClass: "page-about",
        init: async () => {
            const { init } = await import("../js/pages/about.js");
            init();
        },
    },
    "/epilogue": {
        page: "pages/epilogue.html",
        title: "Epilogue",
        bodyClass: "page-epilogue",
        init: async () => {
            const { init } = await import("../js/pages/epilogue.js");
            init();
        },
    },
};

// Flag para indicar que, tras una navegación desde `.link-back`, se debe
// abrir el modal de visualización
let pendingModalViz = false;

// Obtener el base path una sola vez
const getBasePath = () => {
    const basePath = import.meta.env.BASE_URL || "/";
    return basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
};

const BASE_PATH = getBasePath();

const handleRoute = async () => {
    // Obtener la ruta actual y remover el base path
    let path = window.location.pathname;

    // Remover el base path para obtener la ruta relativa
    if (path.startsWith(BASE_PATH)) {
        path = path.slice(BASE_PATH.length) || "/";
    }

    // Asegurar que la ruta comience con /
    if (!path.startsWith("/")) {
        path = "/" + path;
    }

    const route = routes[path] || routes["/"];

    document.title = route.title;
    updateBodyClass(route.bodyClass);

    await loadPage(route.page);

    if (typeof route.init === "function") {
        await route.init();
    }

    // Si venimos de un click en `.link-back`, y la ruta cargada es visualización,
    // ejecuta la inicialización del modal de visualización.
    if (route.page && route.page.includes("visualization") && pendingModalViz) {
        pendingModalViz = false;
        if (typeof modalVizInit === "function") {
            setTimeout(() => modalVizInit(), 0);
        }
    }

    // Cambiar header según la página
    const headerPath =
        path === "/visualization/periods"
            ? "componets/header-interior.html"
            : "componets/header.html";

    await loadComponent("#header", headerPath);

    // Cerrar el offcanvas si está abierto
    const offcanvasEl = document.getElementById("offcanvasDarkNavbar");
    if (offcanvasEl) {
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
        if (offcanvas) {
            offcanvas.hide();
        }
    }

    // Forzar remover clases del body en caso de que no se reseteen
    document.body.classList.remove("overflow-hidden");
    document.body.removeAttribute("style");

    // Scroll al inicio de la página
    window.scrollTo(0, 0);
};

/**
 * Inicializa el router SPA
 */
export function initRouter() {
    const view = document.querySelector("[data-router-view]");

    if (!view) {
        console.error("Router view not found");
        return;
    }

    /**
     * Intercepta navegación interna
     */
    document.addEventListener("click", (e) => {
        const link = e.target.closest("[data-link]");
        if (!link) return;

        // Si el enlace tiene la clase `.link-back`, marcar el flag
        if (link.classList && link.classList.contains("link-back")) {
            pendingModalViz = true;
        }

        // Ignorar links externos
        const url = new URL(link.href);
        if (url.origin !== window.location.origin) return;

        e.preventDefault();

        // Construir la nueva URL con el base path
        let newPath = url.pathname;

        // Si la ruta no comienza con el base path, agregarlo
        if (!newPath.startsWith(BASE_PATH) && BASE_PATH !== "/") {
            newPath = BASE_PATH + newPath;
        }

        history.pushState(null, "", newPath);
        handleRoute();
    });

    // Escucha delegada para `.link-back` en cualquier página
    document.addEventListener("click", (e) => {
        const lb = e.target.closest(".link-back");
        if (!lb) return;
        pendingModalViz = true;
    });

    /**
     * Back / Forward del navegador
     */
    window.addEventListener("popstate", handleRoute);

    /**
     * Carga inicial
     */
    handleRoute();
}
