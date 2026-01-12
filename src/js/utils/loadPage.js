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

// async function loadScriptsFromHTML(html) {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(html, "text/html");
//     const scripts = doc.querySelectorAll("script");
//
//     for (const script of scripts) {
//         const newScript = document.createElement("script");
//         if (script.src) {
//             newScript.src = script.src;
//         } else {
//             newScript.textContent = script.textContent;
//         }
//         if (script.type) {
//             newScript.type = script.type;
//         }
//         document.head.appendChild(newScript);
//     }
// }

export function updateBodyClass(className) {
    document.body.classList.forEach((cls) => {
        if (cls.startsWith("page-")) {
            document.body.classList.remove(cls);
        }
    });

    document.body.classList.add(className);
}
