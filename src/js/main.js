import { loadComponent } from "./utils/loadComponent.js";
// import { initRouter } from "../router/router.js";
import { currentDate } from "./utils/loadPage.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

import "./../scss/styles.scss";
import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/collapse";

gsap.registerPlugin(ScrollTrigger);

const initImgCoverZoom = () => {
    const imageCovers = gsap.utils.toArray(".img-zoom");

    imageCovers.forEach((cover) => {
        const image = cover.querySelector("img");

        if (!image) return;

        gsap.set(image, {
            scale: 2,
            transformOrigin: "center center",
        });

        gsap.to(image, {
            scale: 1,
            ease: "none",
            scrollTrigger: {
                trigger: cover,
                start: "top bottom",
                end: "center center",
                scrub: true,
                invalidateOnRefresh: true,
                // markers: true,
            },
        });
    });
};

// Layout
(async () => {
    if (document.querySelector("main").classList.contains("main-periods")) {
        await loadComponent("#header", "componets/header-interior.html");
    } else {
        await loadComponent("#header", "componets/header.html");
    }

    // initRouter();
    currentDate();
    initImgCoverZoom();
})();
