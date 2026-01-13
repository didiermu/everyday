import pages from "../pages.js";

export async function loadPage(path) {
    const view = document.querySelector("[data-router-view]");
    if (!view) return;

    // Limpiar completamente el contenido anterior
    view.innerHTML = "";

    const html = pages[path];
    if (html) {
        view.innerHTML = html;
    } else {
        console.error(`Page not found: ${path}`);
        view.innerHTML =
            '<div class="error-page"><h1>404 - Page Not Found</h1></div>';
    }
}

export function updateBodyClass(className) {
    // Remover todas las clases que empiecen con "page-"
    const classesToRemove = Array.from(document.body.classList).filter((cls) =>
        cls.startsWith("page-")
    );

    classesToRemove.forEach((cls) => {
        document.body.classList.remove(cls);
    });

    // Agregar la nueva clase
    if (className) {
        document.body.classList.add(className);
    }
}
