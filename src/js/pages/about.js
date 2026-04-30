import {
    getScrollInstance,
    destroyScroll,
    smoothScroll,
} from "./../utils/loadLocomotive.js";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({
    ignoreMobileResize: true,
});

ScrollTrigger.defaults({
    invalidateOnRefresh: false,
});

const mediaQuery = window.matchMedia("(min-width:1280px)");

const readMore = () => {
    const text = document.querySelector("#more-about");
    const readMoreBtn = document.querySelector("#read-about");

    if (readMoreBtn && text) {
        readMoreBtn.onclick = () => {
            const isOpen = text.classList.toggle("is-open");
            readMoreBtn.textContent = isOpen ? "Read less" : "Read more";
            readMoreBtn.setAttribute("aria-expanded", isOpen);
        };
    }
};

export function initAbout() {
    smoothScroll();

    readMore();
}

initAbout();
