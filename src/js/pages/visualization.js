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

const hoverRings = () => {
    const rings = document.querySelectorAll(".gold-dot");
    const visualizationPop = document.querySelector(".visualization--pop");

    rings.forEach((element) => {
        let idRing = element.id.replace("nodo-", "");
        element.addEventListener("mouseenter", () => {
            setTimeout(() => {
                visualizationPop
                    .querySelector("img")
                    .setAttribute("src", `./img/ring-${idRing}.png`);
                visualizationPop.classList.add("show");
            }, 100);
        });
    });
    visualizationPop
        .querySelector(".visualization--pop--hover")
        .addEventListener("mouseleave", () => {
            visualizationPop.classList.remove("show");
        });
};

const hoverPeriods = () => {
    const rings = document.querySelectorAll(".yellow-dot");
    const visualizationPop = document.querySelector(".visualization--period");

    rings.forEach((element) => {
        let idRing = element.id.replace("period-", "");
        element.addEventListener("mouseenter", () => {
            setTimeout(() => {
                visualizationPop
                    .querySelector("img")
                    .setAttribute("src", `./img/period-${idRing}.jpg`);
                visualizationPop.classList.add("show");
            }, 100);
        });
    });
    visualizationPop
        .querySelector(".visualization--period--hover")
        .addEventListener("mouseleave", () => {
            visualizationPop.classList.remove("show");
        });
};

export function init() {
    modalViz();
    hoverRings();
    hoverPeriods();
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
