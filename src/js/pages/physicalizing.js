import Swiper from "swiper";
import { EffectCreative } from "swiper/modules";

import "swiper/css/effect-creative";
import "swiper/css";

const slider = () => {
    const swiper = new Swiper(".swiper", {
        modules: [EffectCreative],
        direction: "horizontal",
        // loop: true,
        slidesPerView: "auto",
        grabCursor: true,
        centeredSlides: true,
        // centerInsufficientSlides: true,
        // centeredSlidesBounds: true,

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
}
