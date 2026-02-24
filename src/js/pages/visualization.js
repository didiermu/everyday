import { loadComponent } from "./../utils/loadComponent.js";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { initPeriods } from "./periods.js";

let buttonHandler = null;
let linkHandler = null;
let linkBack;

const modalViz = () => {
    const hero = document.querySelector(".hero-viz");
    const modal = document.querySelector(".visualization");
    const button = document.querySelector("#btn-viz");

    if (modal && button) {
        buttonHandler = () => {
            hero.classList.add("hide");
            modal.classList.add("show");

            ScrollTrigger.refresh();
            document.querySelector("body").className = "panel-3";
            // console.log("viz");
        };

        button.addEventListener("click", buttonHandler);
    }
};

const modalExplore = () => {
    const swiperEl = document.querySelector(".swiper-periods");
    const hero = document.querySelector(".visualization");
    const heroViz = document.querySelector(".hero-viz");
    const modal = document.querySelector(".main-periods");
    const button = document.querySelector("#btn-explore");
    const linkExplore = document.querySelector(".visualization--button");

    let swiperInstance = null; // 👈 guardamos referencia

    if (modal && button) {
        const buttonHandler = async () => {
            hero.classList.remove("show");
            hero.classList.add("hide");
            modal.classList.add("show");

            loadComponent("#header", "componets/header-interior.html");

            const linkBack = document.querySelector(".link-back");
            linkBack.addEventListener("click", linkHandler);

            // 👇 inicializamos y guardamos instancia
            swiperInstance = await initPeriods();

            setTimeout(() => {
                ScrollTrigger.refresh();
                document.querySelector("body").className = "panel-3";
            }, 500);
        };

        const linkHandler = () => {
            hero.classList.add("show");
            modal.classList.remove("show");

            // ✅ destruir swiper correctamente
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
            }

            loadComponent("#header", "componets/header.html");

            ScrollTrigger.refresh();
        };

        button.addEventListener("click", buttonHandler);
        linkExplore.addEventListener("click", buttonHandler);
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
    modalViz();
    modalExplore();
    hoverRings();
    hoverPeriods();
};

init();

// alert("limpiar conentedor slide periods");
