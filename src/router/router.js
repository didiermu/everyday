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
        // init: async () => {
        //     const { init } = await import("../js/pages/periods.js");
        //     init();
        // },
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
// abrir el modal de visualización. Se declara en el ámbito del módulo para
// que `handleRoute` lo vea.
let pendingModalViz = false;

const handleRoute = async () => {
    const path = window.location.pathname;
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
            // Llamar después de un micro-tick para asegurar que el DOM está actualizado
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
};

/**
 * Inicializa el router SPA
 */
// handleRoute();

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
        const link = e.target.closest("a[data-link]");
        if (!link) return;

        // Si el enlace tiene la clase `.link-back`, marcar el flag antes de
        // navegar para que `handleRoute` pueda abrir el modal después.
        if (link.classList && link.classList.contains("link-back")) {
            pendingModalViz = true;
        }

        // Ignorar links externos
        const url = new URL(link.href);
        if (url.origin !== window.location.origin) return;

        e.preventDefault();

        history.pushState(null, "", url.pathname);
        handleRoute();
    });

    // Escucha delegada para `.link-back` en cualquier página. Si se hace click,
    // se marca un flag para que, al cargar la ruta de visualización, se abra el modal.
    document.addEventListener("click", (e) => {
        const lb = e.target.closest(".link-back");
        if (!lb) return;

        // Marcar intención de abrir modal tras la navegación
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
