import { loadComponent } from "./../utils/loadComponent.js";
import { smoothScroll } from "./../utils/loadLocomotive.js";

let locomotiveInstance = null;
let buttonHandler = null;
let linkHandler = null;
let linkBack;

const modalExplore = () => {
    const hero = document.querySelector(".visualization");
    const modal = document.querySelector("#modal-periods");
    const button = document.querySelector("#btn-explore");
    const linkExplore = document.querySelector(".visualization--button");

    if (modal && button) {
        buttonHandler = () => {
            hero.classList.add("hide");
            modal.classList.add("show");
            loadComponent("#header", "componets/header-interior.html");
            linkBack = document.querySelector(".link-back");
            linkBack.addEventListener("click", linkHandler);
        };

        linkHandler = () => {
            hero.classList.remove("hide");
            modal.classList.remove("show");
            loadComponent("#header", "componets/header.html");
        };

        button.addEventListener("click", buttonHandler);
        linkExplore.addEventListener("click", buttonHandler);
    }
};

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

const init = () => {
    modalExplore();
    modalViz();
    hoverRings();
    hoverPeriods();
};

init();
