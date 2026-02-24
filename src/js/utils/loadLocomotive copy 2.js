// import LocomotiveScroll from "@locomotive/dist/locomotive-scroll.js";
import LocomotiveScroll from "locomotive-scroll";

export async function smoothScroll() {
    const container = document.querySelector("[data-scroll-container]");

    if (!container) {
        console.warn("No se encontró [data-scroll-container]");
        return null;
    }

    // Un pequeño delay ayuda a que el DOM se asiente antes de calcular targets
    await new Promise((resolve) => setTimeout(resolve, 100));

    const scroll = new LocomotiveScroll({
        el: container,
        smooth: true,
        multiplier: 1,
        getDirection: true,
    });

    // Forzar actualización después de inicializar
    // setTimeout(() => {
    //     scroll.update();
    // }, 500);

    return scroll;
}
