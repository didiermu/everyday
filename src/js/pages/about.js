import { smoothScroll } from "./../utils/loadLocomotive.js";

let locomotiveInstance = null;

export function init() {
    locomotiveInstance = smoothScroll();
}

export function destroy() {
    if (locomotiveInstance) {
        locomotiveInstance.destroy();
        locomotiveInstance = null;
    }
}
