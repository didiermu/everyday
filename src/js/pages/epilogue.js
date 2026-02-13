import Swiper from "swiper";
import "swiper/css";
import * as bootstrap from "bootstrap";

let locomotiveInstance = null;
let swiperTools = null;
let swiperLessons = null;
let buttonHandlers = [];
let tabInstances = [];

const botonera = async () => {
    const btnTools = document.getElementById("btn-tools");
    const btnLessons = document.getElementById("btn-lessons");
    const heroSection = document.querySelector(".page-epilogue .hero");
    const panelsSection = document.querySelector(".panels");

    if (btnTools) {
        const toolsHandler = () => {
            heroSection.style.display = "none";
            panelsSection.style.display = "block";
        };

        btnTools.addEventListener("click", toolsHandler);
        buttonHandlers.push({ element: btnTools, handler: toolsHandler });
    }

    if (btnLessons) {
        const lessonsHandler = () => {
            heroSection.style.display = "none";
            panelsSection.style.display = "block";

            const profileTab = new bootstrap.Tab(
                document.getElementById("profile-tab"),
            );
            profileTab.show();
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

const init = async () => {
    slider();
    botonera();
};

init();
