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

// export function smoothScroll() {
//     //     const scrollContainer = document.querySelector("[data-scroll-container]");
//     //
//     //     if (!scrollContainer) {
//     //         console.error("No se encontró [data-scroll-container]");
//     //         return null;
//     //     }
//     //
//     //     const scroll = new LocomotiveScroll({
//     //         el: scrollContainer,
//     //         smooth: true,
//     //         multiplier: 1,
//     //         smartphone: {
//     //             smooth: true,
//     //         },
//     //         tablet: {
//     //             smooth: true,
//     //         },
//     //     });
//     //
//     //     // Actualizar después de cargar
//     //     window.addEventListener("load", () => {
//     //         scroll.update();
//     //     });
//     //
//     //     setTimeout(() => {
//     //         scroll.update();
//     //     }, 1000);
//     //
//     //
//     const locomotiveScroll = new LocomotiveScroll();
//
//     return locomotiveScroll;
// }

// export function smoothScroll() {
//     const scrollContainer = document.querySelector("[data-scroll-container]");
//
//     const locoScroll = new LocomotiveScroll({
//         el: scrollContainer,
//         smooth: true,
//         multiplier: 1,
//         smartphone: { smooth: true },
//         tablet: { smooth: true },
//     });
//
//     // ✅ ESTO SOLO EXISTE EN v4
//     locoScroll.on("scroll", ScrollTrigger.update);
//
//     ScrollTrigger.scrollerProxy(scrollContainer, {
//         scrollTop(value) {
//             return arguments.length
//                 ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
//                 : locoScroll.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//             return {
//                 top: 0,
//                 left: 0,
//                 width: window.innerWidth,
//                 height: window.innerHeight,
//             };
//         },
//         pinType: scrollContainer.style.transform ? "transform" : "fixed",
//     });
//
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//     ScrollTrigger.refresh();
//
//     return locoScroll;
// }
