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
        title: "Visualization – Periods",
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
            currentPageModule.destroy();
        } catch (err) {
            console.warn("Error en destroy():", err);
        }
    }
    currentPageModule = null;

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
        const module = await route.loader();

        if (module?.init) {
            module.init();
            currentPageModule = module;
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

    document.body.classList.remove("overflow-hidden");
    document.body.removeAttribute("style");

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
        window.location.href = newPath;
    });

    window.addEventListener("popstate", handleRoute);

    handleRoute();
}
