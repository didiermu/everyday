import LocomotiveScroll from "@locomotive/dist/locomotive-scroll.js";
export function smoothScroll() {
    const scrollContainer = document.querySelector("[data-scroll-container]");

    if (!scrollContainer) {
        console.error("No se encontró [data-scroll-container]");
        return null;
    }

    const scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        multiplier: 1,
        smartphone: {
            smooth: true,
        },
        tablet: {
            smooth: true,
        },
    });

    // Actualizar después de cargar
    window.addEventListener("load", () => {
        scroll.update();
    });

    setTimeout(() => {
        scroll.update();
    }, 1000);

    console.log("los");
    return scroll;
}
