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
        title: "Visualization – Periods",
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

/* ---------------------------------------------------
   BASE PATH (Vite)
--------------------------------------------------- */
const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");

/* ---------------------------------------------------
   FLAGS
--------------------------------------------------- */
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

    document.title = route.title;
    updateBodyClass(route.bodyClass);

    await loadPage(route.page);

    if (route.init) await route.init();

    window.scrollTo(0, 0);
};

/* ---------------------------------------------------
   INIT ROUTER
--------------------------------------------------- */
export function initRouter() {
    const view = document.querySelector("[data-router-view]");
    if (!view) return;

    // Navegación interna
    document.addEventListener("click", (e) => {
        const link = e.target.closest("[data-link]");
        if (!link) return;

        const url = new URL(link.href);

        // externos no
        if (url.origin !== window.location.origin) return;

        if (link.classList.contains("link-back")) {
            pendingModalViz = true;
        }

        e.preventDefault();

        let newPath = url.pathname;

        // limpiar
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
