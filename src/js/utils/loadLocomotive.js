import LocomotiveScroll from "locomotive-scroll";

let scrollInstance = null;
let scrollContainer = null;
let isReady = false; // ✅ flag de estado

export function smoothScroll() {
    scrollContainer = document.querySelector("[data-scroll-container]");
    if (!scrollContainer) return null;

    if (scrollInstance) {
        scrollInstance.destroy();
        scrollInstance = null;
    }

    scrollInstance = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        // autoStart: false, // ✅ no arrancar RAF propio
        lenisOptions: {
            lerp: 0.1,
            autoRaf: false, // ✅ desactivar RAF interno de Lenis
        },
    });

    isReady = true; // ✅ marcar como listo

    window.dispatchEvent(
        new CustomEvent("locomotiveReady", {
            detail: { instance: scrollInstance },
        }),
    );

    return scrollInstance;
}

export function getScrollInstance() {
    return scrollInstance;
}

export function isScrollReady() {
    // ✅ exportar el estado
    return isReady;
}

export function destroyScroll() {
    if (scrollInstance) {
        scrollInstance.destroy();
        scrollInstance = null;
        isReady = false;
    }
}

export function getLenisInstance() {
    return scrollInstance?.lenisInstance ?? null;
}

export function stopScroll() {
    scrollInstance?.lenisInstance?.stop();
    console.log("stop");
}

export function startScroll() {
    scrollInstance?.lenisInstance?.start();
    console.log("start");
}

export function stopScrollMob() {
    scrollInstance?.lenisInstance?.stop();

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    if (scrollContainer) {
        scrollContainer.style.touchAction = "none";
        scrollContainer.style.overflow = "hidden";
    }
}

export function startScrollMob() {
    scrollInstance?.lenisInstance?.start();

    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    document.body.style.touchAction = "";

    if (scrollContainer) {
        scrollContainer.style.touchAction = "";
        scrollContainer.style.overflow = "";
    }
}
