import pages from "../pages.js";

export async function loadPage(path) {
    const view = document.querySelector("[data-router-view]");
    if (!view) return;

    const html = pages[path];
    if (html) {
        view.innerHTML = html;
        // Cargar scripts dinámicamente después de insertar el HTML
        // await loadScriptsFromHTML(html);
    } else {
        console.error(`Page not found: ${path}`);
    }
}

export function updateBodyClass(className) {
    document.body.classList.forEach((cls) => {
        if (cls.startsWith("page-")) {
            document.body.classList.remove(cls);
        }
    });

    document.body.classList.add(className);
}
