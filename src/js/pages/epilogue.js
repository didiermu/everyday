import {
    getScrollInstance,
    destroyScroll,
    smoothScroll,
} from "./../utils/loadLocomotive.js";

import { initImgCoverZoom } from ".//../main.js";

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
            setTimeout(() => {
                gsap.fromTo(
                    panelsSection,
                    { opacity: 0 },
                    { opacity: 1, duration: 1, ease: "power2.out" },
                );
                heroSection.style.display = "none";
                panelsSection.style.display = "block";
                ScrollTrigger.refresh();
            }, 100);
        };

        btnTools.addEventListener("click", toolsHandler);
        buttonHandlers.push({ element: btnTools, handler: toolsHandler });
    }

    if (btnLessons) {
        const lessonsHandler = () => {
            heroSection.style.display = "none";
            panelsSection.style.display = "block";
            gsap.fromTo(
                panelsSection,
                { opacity: 0 },
                { opacity: 1, duration: 1 },
            );

            const profileTab = new bootstrap.Tab(
                document.getElementById("profile-tab"),
            );
            profileTab.show();

            setTimeout(() => {
                // initImgCoverZoom();
                ScrollTrigger.refresh();
            }, 100);
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
            setTimeout(() => {
                // initImgCoverZoom();
                ScrollTrigger.refresh();
            }, 100);
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
        breakpoints: {
            1280: {
                allowTouchMove: false,
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
        breakpoints: {
            1280: {
                allowTouchMove: false,
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

const blogMenuHandler = () => {
    const blogLink = document.querySelector('a[href="blog.html"]');
    const heroSection = document.querySelector(".page-epilogue .hero");
    const panelsSection = document.querySelector(".panels");
    const offcanvasMenu = document.getElementById("offcanvasDarkNavbar");
    const offcanvasInstance = offcanvasMenu
        ? bootstrap.Offcanvas.getInstance(offcanvasMenu)
        : null;

    if (blogLink) {
        blogLink.addEventListener("click", (e) => {
            if (window.location.pathname.includes("blog.html")) {
                e.preventDefault();

                heroSection.style.display = "block";
                panelsSection.style.display = "none";

                if (offcanvasInstance) {
                    offcanvasInstance.hide();
                }

                window.scrollTo(0, 0);
            }
        });
    }
};

const init = async () => {
    smoothScroll();

    slider();
    botonera();
    initImgCoverZoom();
    blogMenuHandler();
};

init();
