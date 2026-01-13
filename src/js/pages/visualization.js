import { smoothScroll } from "./../utils/loadLocomotive.js";

let locomotiveInstance = null;
let buttonHandler = null;

const modalViz = () => {
    const hero = document.querySelector(".hero");
    const modal = document.querySelector(".visualization");
    const button = document.querySelector("#btn-viz");

    if (modal && button) {
        buttonHandler = () => {
            hero.classList.add("hide");
            modal.classList.add("show");

            // Destruir y reinicializar Locomotive después del cambio
            if (locomotiveInstance) {
                locomotiveInstance.destroy();
            }
            locomotiveInstance = smoothScroll();
        };

        button.addEventListener("click", buttonHandler);
    }
};

export function init() {
    modalViz();
    locomotiveInstance = smoothScroll();
}

export function destroy() {
    // Limpiar Locomotive
    if (locomotiveInstance) {
        locomotiveInstance.destroy();
        locomotiveInstance = null;
    }

    // Limpiar event listener del botón
    if (buttonHandler) {
        const button = document.querySelector("#btn-viz");
        if (button) {
            button.removeEventListener("click", buttonHandler);
        }
        buttonHandler = null;
    }
}
