import Swiper from "swiper";
import "swiper/css";
import * as bootstrap from "bootstrap";
import { smoothScroll } from "./../utils/loadLocomotive.js";

let locomotiveInstance = null;
let swiperTools = null;
let swiperLessons = null;
let buttonHandlers = [];
let tabInstances = [];

const botonera = async () => {
    const btnTools = document.getElementById("btn-tools");
    const btnLessons = document.getElementById("btn-lessons");
    const heroSection = document.querySelector(".hero");
    const panelsSection = document.querySelector(".panels");

    if (btnTools) {
        const toolsHandler = () => {
            heroSection.style.display = "none";
            panelsSection.style.display = "block";

            // Destruir y reinicializar Locomotive
            if (locomotiveInstance) {
                locomotiveInstance.destroy();
            }
            locomotiveInstance = smoothScroll();
        };

        btnTools.addEventListener("click", toolsHandler);
        buttonHandlers.push({ element: btnTools, handler: toolsHandler });
    }

    if (btnLessons) {
        const lessonsHandler = () => {
            heroSection.style.display = "none";
            panelsSection.style.display = "block";

            const profileTab = new bootstrap.Tab(
                document.getElementById("profile-tab")
            );
            profileTab.show();

            // Destruir y reinicializar Locomotive
            if (locomotiveInstance) {
                locomotiveInstance.destroy();
            }
            locomotiveInstance = smoothScroll();
        };

        btnLessons.addEventListener("click", lessonsHandler);
        buttonHandlers.push({ element: btnLessons, handler: lessonsHandler });
    }

    const triggerTabList = document.querySelectorAll("#myTab button");
    triggerTabList.forEach((triggerEl) => {
        const tabTrigger = new bootstrap.Tab(triggerEl);
        tabInstances.push(tabTrigger);

        const tabHandler = (event) => {
            event.preventDefault();

            // Destruir y reinicializar Locomotive
            if (locomotiveInstance) {
                locomotiveInstance.destroy();
            }
            locomotiveInstance = smoothScroll();
        };

        triggerEl.addEventListener("click", tabHandler);
        buttonHandlers.push({ element: triggerEl, handler: tabHandler });
    });
};

const slider = () => {
    swiperTools = new Swiper(".swiper-tools", {
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 20,
        cssMode: true,
    });

    swiperLessons = new Swiper(".swiper-lessons", {
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 20,
        cssMode: true,
    });
};

export async function init() {
    slider();
    await botonera();
    locomotiveInstance = smoothScroll();
}

export function destroy() {
    // Destruir Swiper instances
    if (swiperTools) {
        swiperTools.destroy(true, true);
        swiperTools = null;
    }

    if (swiperLessons) {
        swiperLessons.destroy(true, true);
        swiperLessons = null;
    }

    // Destruir Locomotive
    if (locomotiveInstance) {
        locomotiveInstance.destroy();
        locomotiveInstance = null;
    }

    // Limpiar event listeners de botones
    buttonHandlers.forEach(({ element, handler }) => {
        if (element) {
            element.removeEventListener("click", handler);
        }
    });
    buttonHandlers = [];

    // Limpiar tabs de Bootstrap
    tabInstances.forEach((tab) => {
        if (tab && tab.dispose) {
            tab.dispose();
        }
    });
    tabInstances = [];
}
