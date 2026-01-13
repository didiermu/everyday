import Swiper from "swiper";
import "swiper/css";
import * as bootstrap from "bootstrap";
import { smoothScroll } from "./../utils/loadLocomotive.js";

const botonera = async () => {
    const btnTools = document.getElementById("btn-tools");
    const btnLessons = document.getElementById("btn-lessons");
    const heroSection = document.querySelector(".hero");
    const panelsSection = document.querySelector(".panels");

    if (btnTools) {
        btnTools.addEventListener("click", () => {
            heroSection.style.display = "none";
            panelsSection.style.display = "block";

            smoothScroll();
        });
    }

    if (btnLessons) {
        btnLessons.addEventListener("click", () => {
            heroSection.style.display = "none";
            panelsSection.style.display = "block";

            const profileTab = new bootstrap.Tab(
                document.getElementById("profile-tab")
            );
            profileTab.show();

            smoothScroll();
        });
    }

    const triggerTabList = document.querySelectorAll("#myTab button");
    triggerTabList.forEach((triggerEl) => {
        const tabTrigger = new bootstrap.Tab(triggerEl);

        triggerEl.addEventListener("click", (event) => {
            event.preventDefault();
            smoothScroll();
        });
    });
};

const slider = () => {
    const swiper = new Swiper(".swiper-tools", {
        direction: "horizontal",
        // loop: true,
        slidesPerView: "auto",
        spaceBetween: 20,
        cssMode: true,
    });

    const swiperLessons = new Swiper(".swiper-lessons", {
        direction: "horizontal",
        // loop: true,
        slidesPerView: "auto",
        spaceBetween: 20,
        cssMode: true,
    });
};

export async function init() {
    slider();
    botonera();
}
