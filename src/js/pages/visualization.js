import { smoothScroll } from "./../utils/loadLocomotive.js";

const modalViz = () => {
    const hero = document.querySelector(".hero");
    const modal = document.querySelector(".visualization");
    const button = document.querySelector("#btn-viz");

    if (modal && button) {
        button.addEventListener("click", () => {
            hero.classList.add("hide");
            modal.classList.add("show");

            smoothScroll();
        });
    }
};

export function init() {
    modalViz();
}

// init();
