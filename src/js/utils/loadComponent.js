import components from "../components.js";

export async function loadComponent(selector, path) {
    const container = document.querySelector(selector);
    if (!container) return;

    const html = components[path];
    if (html) {
        container.innerHTML = html;
    } else {
        console.error(`Component not found: ${path}`);
    }
}
