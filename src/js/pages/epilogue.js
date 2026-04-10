import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import * as bootstrap from "bootstrap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({
    ignoreMobileResize: true,
});

ScrollTrigger.defaults({
    invalidateOnRefresh: false,
});

let locomotiveInstance = null;
let swiperTools = null;
let swiperLessons = null;
let swiperBlog = null;
let swiperLearned = null;
let buttonHandlers = [];
let tabInstances = [];
let hideSlideIndex = null;

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
        on: {
            click: function () {
                hideSlideIndex = this.clickedIndex;
                swiperBlog.slideTo(hideSlideIndex);
            },
        },
    });

    swiperLessons = new Swiper(".swiper-lessons", {
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 20,
        cssMode: true,
        on: {
            click: function () {
                hideSlideIndex = this.clickedIndex;
                swiperLearned.slideTo(hideSlideIndex);
            },
        },
    });

    swiperBlog = new Swiper(".swiper-blog", {
        modules: [Pagination],
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 20,
        autoHeight: true,
        pagination: {
            el: ".swiper-blog .swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return (
                    '<span class="' + className + '">' + (index + 1) + "</span>"
                );
            },
        },
        on: {
            init: function () {
                hideSlideIndex = this.activeIndex;
                const slide = swiperTools.slides[hideSlideIndex];
                if (slide) {
                    slide.classList.add("hide");
                }
            },
            slideChange: function () {
                swiperTools.slides.forEach((slide) =>
                    slide.classList.remove("hide"),
                );
                hideSlideIndex = this.activeIndex;
                const slide = swiperTools.slides[hideSlideIndex];
                if (slide) {
                    slide.classList.add("hide");
                }
            },
        },
    });

    swiperLearned = new Swiper(".swiper-learned", {
        modules: [Pagination],
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 20,
        autoHeight: true,
        pagination: {
            el: ".swiper-learned .swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return (
                    '<span class="' + className + '">' + (index + 1) + "</span>"
                );
            },
        },
        on: {
            init: function () {
                hideSlideIndex = this.activeIndex;
                const slide = swiperLessons.slides[hideSlideIndex];
                if (slide) {
                    slide.classList.add("hide");
                }
            },
            slideChange: function () {
                swiperLessons.slides.forEach((slide) =>
                    slide.classList.remove("hide"),
                );
                hideSlideIndex = this.activeIndex;
                const slide = swiperLessons.slides[hideSlideIndex];
                if (slide) {
                    slide.classList.add("hide");
                }
            },
        },
    });
};

const init = async () => {
    slider();
    botonera();
};

init();
