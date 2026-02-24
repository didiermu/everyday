import LocomotiveScroll from "locomotive-scroll";

let scrollInstance = null;
let scrollContainer = null;

export function smoothScroll() {
    scrollContainer = document.querySelector("[data-scroll-container]");
    if (!scrollContainer) return null;

    // 👇 Si ya existe, destrúyelo antes de crear uno nuevo
    if (scrollInstance) {
        scrollInstance.destroy();
        scrollInstance = null;
    }

    scrollInstance = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
    });

    return scrollInstance;
}

export function getScrollInstance() {
    return scrollInstance;
}

export function destroyScroll() {
    if (scrollInstance) {
        scrollInstance.destroy();
        scrollInstance = null;
    }
}
