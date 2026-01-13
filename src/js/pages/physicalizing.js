import Swiper from "swiper";
import { EffectCreative } from "swiper/modules";
import { smoothScroll } from "./../utils/loadLocomotive.js";

import "swiper/css/effect-creative";
import "swiper/css";

let locomotiveInstance = null;
let swiperInstance = null;

const slider = () => {
    swiperInstance = new Swiper(".swiper", {
        modules: [EffectCreative],
        direction: "horizontal",
        slidesPerView: "auto",
        grabCursor: true,
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

export function init() {
    slider();
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
