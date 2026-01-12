import Swiper from "swiper";
import "swiper/css";
import * as bootstrap from "bootstrap";

const botonera = () => {
    const btnTools = document.getElementById("btn-tools");
    const btnLessons = document.getElementById("btn-lessons");
    const heroSection = document.querySelector(".hero");
    const panelsSection = document.querySelector(".panels");

    if (btnTools) {
        btnTools.addEventListener("click", () => {
            heroSection.style.display = "none";
            panelsSection.style.display = "block";
        });
    }

    if (btnLessons) {
        btnLessons.addEventListener("click", () => {
            heroSection.style.display = "none";
            panelsSection.style.display = "block";
            // Activar el tab de profile-tab
            const profileTab = new bootstrap.Tab(
                document.getElementById("profile-tab")
            );
            profileTab.show();
        });
    }
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

export function init() {
    slider();
    botonera();
}
