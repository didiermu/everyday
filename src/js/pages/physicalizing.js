import Swiper from "swiper";
import { EffectCreative } from "swiper/modules";
import { smoothScroll } from "./../utils/loadLocomotive.js";
import { gsap } from "gsap";

import "swiper/css/effect-creative";
import "swiper/css";

let locomotiveInstance = null;
let swiperInstance = null;

const slider = () => {
    swiperInstance = new Swiper(".swiper", {
        modules: [EffectCreative],
        direction: "horizontal",
        slidesPerView: "auto",
        grabCursor: false,
        centeredSlides: true,

        effect: "creative",
        creativeEffect: {
            prev: {
                translate: ["-130%", 40, -200],
                rotate: [0, 0, -10],
                scale: 0.8,
            },
            next: {
                translate: ["130%", 40, -200],
                rotate: [0, 0, 10],
                scale: 0.8,
            },
        },
    });
};

const duplicateSlides = (swiperSelector, times = 2) => {
    const swiperContainer = document.querySelector(swiperSelector);
    if (!swiperContainer) return;

    const slides = Array.from(swiperContainer.querySelectorAll("h4"));

    for (let i = 0; i < times; i++) {
        slides.forEach((slide) => {
            const clone = slide.cloneNode(true);
            clone.classList.add("cloned");
            swiperContainer.appendChild(clone);
        });
    }
};

function createMarquee({
    container,
    speed = 10,
    direction = "left",
    gap = 40,
}) {
    const marquee =
        typeof container === "string"
            ? document.querySelector(container)
            : container;

    if (!marquee) return;

    const track = marquee.querySelector(".marquee");
    if (!track) return;

    // Medir ancho real
    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
        x: direction === "left" ? -totalWidth : totalWidth,
        duration: speed,
        ease: "none",
        repeat: -1,
    });

    return tween;
}

export function init() {
    slider();
    duplicateSlides(".marquee", 10);
    createMarquee({ container: ".expand__image", speed: 20 });
    locomotiveInstance = smoothScroll();
}

export function destroy() {
    // Destruir Swiper
    if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
    }

    // Destruir Locomotive
    if (locomotiveInstance) {
        locomotiveInstance.destroy();
        locomotiveInstance = null;
    }
}
