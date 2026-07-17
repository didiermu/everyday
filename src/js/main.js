import { loadComponent } from "./utils/loadComponent.js";
// import { initRouter } from "../router/router.js";
import { currentDate } from "./utils/loadPage.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

import "./../scss/styles.scss";
import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/collapse";

import { startScroll } from "./utils/loadLocomotive.js";
import { scrollToSection } from "./pages/home.js";
import { linkHandlerMobile } from "./pages/visualization.js";

gsap.registerPlugin(ScrollTrigger);

export const initImgCoverZoom = () => {
    const imageCovers = gsap.utils.toArray(".img-zoom");

    // Matar todos los triggers existentes en img-zoom
    ScrollTrigger.getAll().forEach((trigger) => {
        if (imageCovers.includes(trigger.trigger)) {
            trigger.kill();
        }
    });

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
            },
        });
    });
};

export const initHashNavigation = () => {
    document.addEventListener("click", (e) => {
        const link = e.target.closest("a[href^='index.html#']");
        if (!link) return;

        const href = link.getAttribute("href");
        const hash = href.split("#")[1];
        const isOnHomepage =
            window.location.pathname.includes("index.html") ||
            window.location.pathname.endsWith("/");

        if (isOnHomepage && hash) {
            e.preventDefault();
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
};

const vizView = document.querySelector(".viz-mapa");
const vizInit = document.querySelector(".hero-viz");
const pageViz = document.querySelector(".page-visualization");

const toggleViz = () => {
    vizView.classList.remove("show");
    vizInit.classList.remove("hide");
    pageViz.removeAttribute("data-lenis-prevent");
};

export const initMenuLinks = () => {
    const links = {
        "#link-intro": "#intro",
        "#link-physicalizing": "#physicalizing",
        "#link-visualization": "#visualization",
    };

    document.addEventListener("click", (e) => {
        for (const [link, hash] of Object.entries(links)) {
            if (!e.target.closest(link)) continue;

            e.preventDefault();

            const currentPage = window.location.pathname.split("/").pop();

            // Si estoy en blog o about -> regreso al index
            if (currentPage === "blog.html" || currentPage === "about.html") {
                window.location.href = `index.html${hash}`;
                return;
            }

            if (
                document
                    .querySelector(".main-periods")
                    .classList.contains("show")
            ) {
                startScroll();
                scrollToSection(hash);
                linkHandlerMobile();
            } else {
                startScroll();
                scrollToSection(hash);
            }

            if (vizView.classList.contains("show")) {
                toggleViz();
            } else {
                console.log("no");
            }
        }
    });
};

export const initHashScroll = () => {
    const hash = window.location.hash;

    if (!hash) return;

    // Espera a que Locomotive esté listo
    setTimeout(() => {
        startScroll();
        scrollToSection(hash);
    }, 300);
};

const validacionIos = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isChromeIOS = isIOS && /CriOS/i.test(navigator.userAgent);

    if (isChromeIOS) {
        document.body.classList.add("is-chrome-ios");
    }
    // document.body.classList.add("is-chrome-ios");
};

// Layout
(async () => {
    if (document.querySelector("main").classList.contains("main-periods")) {
        await loadComponent("#header", "componets/header-interior.html");
    } else {
        await loadComponent("#header", "componets/header.html");
    }

    // initRouter();
    if (
        !document.querySelector("main").classList.contains("main-about") &&
        !document.querySelector("main").classList.contains("main-blog")
    ) {
        currentDate();
    }

    initImgCoverZoom();
    // initHashNavigation();
    initMenuLinks();
    initHashScroll();

    validacionIos();
})();
