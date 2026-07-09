import { stopScroll, startScroll } from "./loadLocomotive.js";

/**
 * Sincroniza Lenis (dentro de Locomotive Scroll v5) con GSAP ScrollTrigger.
 *
 * REGLA DE ORO: Lenis es la única fuente de verdad del scroll.
 * - NO se debe mover Lenis manualmente vía gsap.ticker.add() → eso produce
 *   errores de "NaN" en velocity porque Locomotive v5 ya corre su propio
 *   RAF loop internamente (lenisOptions.autoRaf:false en smoothScroll()
 *   solo evita que Lenis tenga un loop DUPLICADO, no que deje de correr).
 * - Este listener es la única conexión necesaria entre ambas librerías.
 */
const mediaQuery = window.matchMedia("(min-width:1280px)");

const initLenisScrollTriggerSync = (lenis) => {
    if (!lenis) {
        console.warn(
            "[smoothLenis] No se recibió instancia de Lenis, ScrollTrigger no se sincronizará con el scroll.",
        );
        return;
    }

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);
};

/**
 * @param {import("@studio-freight/lenis").default} lenis - instancia lenis
 *   obtenida vía loco.lenisInstance, pasada por quien llama a smoothLenis
 *   (ej: `const loco = smoothScroll(); await smoothLenis(loco.lenisInstance);`)
 */
export const smoothLenis = async (lenis) => {
    initLenisScrollTriggerSync(lenis);

    const panelZoom = () => {
        const panel = gsap.utils.toArray(".panel-zoom");

        panel.forEach((cover) => {
            gsap.set(cover, {
                scale: mediaQuery.matches ? 0.9 : 0.8,
                transformOrigin: "center center",
                borderRadius: 32,
            });

            gsap.to(cover, {
                scale: 1,
                borderRadius: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: cover,
                    start: "top bottom",
                    end: "+=100 center",
                    scrub: true,
                    invalidateOnRefresh: true,
                    // markers: true,
                },
            });
        });
    };

    const paneles = () => {
        const panels = gsap.utils.toArray(".panel");
        const panelContent = gsap.utils.toArray(".panel__content");
        const headerHome = document.querySelector(".head-home");

        panels.forEach((panel, i) => {
            if (i < panels.length - 1) {
                ScrollTrigger.create({
                    trigger: panel,
                    start: mediaQuery.matches
                        ? "bottom bottom"
                        : "+=100% bottom",
                    pin: true,
                    pinSpacing: false,
                    end: "bottom top",
                    invalidateOnRefresh: true,
                    ignoreMobileResize: true,
                    // markers: true,
                });
            }
        });

        panelContent.forEach((panel) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "-=200 top",
                end: "bottom bottom",
                toogleActions: "restart pause reverse pause",
                // markers: true,
            });
        });

        if (!mediaQuery.matches) {
            ScrollTrigger.create({
                trigger: ".page-periods",
                start: "-=200 top",
                end: "bottom bottom",
                // markers: true,
                onEnter: () => (headerHome.style.opacity = "0"),
                onEnterBack: () => (headerHome.style.opacity = "0"),
                onLeave: () => (headerHome.style.opacity = "1"),
                onLeaveBack: () => (headerHome.style.opacity = "1"),
            });
        }
    };

    let currentStep = null;

    const updateImage = (step) => {
        const image = document.querySelector(".expand__image--fondo img");

        const images = [
            "./img/physicalizing-02.webp",
            "./img/fondo-psych-mobile.webp",
            "./img/fondo-psych-mobile-2.webp",
        ];

        const newSrc = images[step - 1];
        if (!newSrc || step === currentStep) return;
        currentStep = step;

        gsap.to(image, {
            autoAlpha: 0,
            duration: 0.3,
            onComplete: () => {
                image.src = newSrc;
                gsap.to(image, { autoAlpha: 1, duration: 0.3 });
            },
        });
    };

    const pinCards = () => {
        const section = document.querySelector(".page-physicalizing--moments");
        const items = gsap.utils.toArray(".expand__image__info");
        const image = document.querySelector(".expand__image--fondo img");

        gsap.set(items, { autoAlpha: 0, y: 20 });
        gsap.set(items[0], { autoAlpha: 1, y: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "+=250%",
                pin: true,
                pinSpacing: false,
                scrub: 1,
                // markers: true,

                onUpdate: (self) => {
                    const step = Math.min(
                        Math.ceil(self.progress * items.length) || 1,
                        items.length,
                    );

                    if (step !== currentStep) {
                        section.className = section.className.replace(
                            /\bis-step-\d+/g,
                            "",
                        );
                        section.classList.add(`is-step-${step}`);
                        updateImage(step);
                    }
                },
            },
        });

        tl.to({}, { duration: 2 });

        items.forEach((item, i) => {
            if (i < items.length - 1) {
                const label = `step${i}`;

                tl.to(item, { autoAlpha: 0, y: -20, duration: 1.5 }, label)
                    .to(
                        items[i + 1],
                        { autoAlpha: 1, y: 0, duration: 1.5 },
                        label,
                    )
                    .to(image, { duration: 2, ease: "power2.inOut" }, label)
                    .to({}, { duration: 2.5 });
            }
        });
    };

    /**
     * Pin del video con "scroll lock": el usuario debe hacer N gestos de
     * scroll dentro del video antes de que Lenis retome el control.
     *
     * Ajustes vs la versión anterior:
     * - stopScroll()/startScroll() ahora vienen de loadLocomotive.js
     *   (antes se llamaban como globales, lo cual solo funcionaba si
     *   existían en window por casualidad de bundling).
     * - trigger.disable(false, false) sigue siendo la forma correcta de
     *   evitar que el propio trigger dispare onLeave mientras lo tenemos
     *   "secuestrado" manualmente.
     */
    const pinVideo = () => {
        const video = document.querySelector(".video");
        if (!video) return;

        let scrollCount = 0;
        let isLocked = false;
        let lastScrollTime = 0;
        let lastTouchY = 0;
        let trigger;

        const unlockScroll = () => {
            if (!isLocked) return;

            isLocked = false;
            scrollCount = 0;

            startScroll();

            window.removeEventListener("wheel", handleScroll);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleScroll);

            // Esperar un frame para que Lenis vuelva a tomar el control
            requestAnimationFrame(() => {
                trigger.enable(false, false);
            });
        };

        const handleTouchStart = (e) => {
            lastTouchY = e.touches[0].clientY;
        };

        const handleScroll = (e) => {
            if (!isLocked) return;
            if (e.cancelable) e.preventDefault();

            let scrollDirection = 0;
            let requiredScrolls = 6;

            if (e.type === "wheel") {
                if (e.deltaY > 0) scrollDirection = 1;
                if (e.deltaY < 0) scrollDirection = -1;
            }

            if (e.type === "touchmove") {
                const currentY = e.touches[0].clientY;
                if (currentY < lastTouchY) scrollDirection = 1;
                else if (currentY > lastTouchY) scrollDirection = -1;
                lastTouchY = currentY;
                requiredScrolls = 3;
            }

            if (!scrollDirection) return;

            const now = Date.now();
            if (now - lastScrollTime < 250) return;
            lastScrollTime = now;

            scrollCount = Math.max(0, scrollCount + scrollDirection);

            if (scrollCount >= requiredScrolls) {
                unlockScroll();
            }
        };

        trigger = ScrollTrigger.create({
            trigger: video,
            start: "top top",
            end: "+=105% center",
            // markers: true,

            onEnter: () => {
                if (isLocked) return;

                isLocked = true;
                scrollCount = 0;
                lastScrollTime = 0;

                stopScroll();

                // Evita que los cambios del viewport disparen onLeave
                trigger.disable(false, false);

                window.addEventListener("wheel", handleScroll, {
                    passive: false,
                });
                window.addEventListener("touchstart", handleTouchStart, {
                    passive: false,
                });
                window.addEventListener("touchmove", handleScroll, {
                    passive: false,
                });
            },
        });
    };

    const setupThreeAnimation = () => {
        ScrollTrigger.create({
            trigger: ".page-home",
            scroller: window,
            start: mediaQuery.matches ? "-=2%" : "+=2%",
            end: mediaQuery.matches ? "80% bottom" : "90% bottom",
            // markers: true,
            scrub: true,

            onUpdate: (self) => {
                const progress = self.progress;
                const base = currentConfig.baseRotation;
                const largoScroll = mediaQuery.matches ? 5.8 : 4;

                targetRotationX = base.x + progress * (Math.PI * 3);
                targetRotationY = base.y + progress * (Math.PI * 1);

                targetPosY = -progress * largoScroll;
                targetPosX = progress * 0;
            },
        });
    };

    const scrollViz = async () => {
        const pageViz = document.querySelector(".page-visualization");
        const visualizationHeroViz = document.querySelector(".hero-viz");
        const visualizationSection = document.querySelector(".visualization");
        const mainPeriods = document.querySelector(".main-periods");

        if (mediaQuery.matches) {
            visualizationSection.classList.add("panel");

            if (visualizationSection.previousElementSibling !== pageViz) {
                pageViz.after(visualizationSection);
            }

            if (mainPeriods.parentNode !== visualizationSection) {
                visualizationSection.appendChild(mainPeriods);
            }
        } else {
            if (
                visualizationHeroViz.previousElementSibling !==
                visualizationSection
            ) {
                visualizationSection.after(visualizationHeroViz);
            }

            if (mainPeriods.nextElementSibling !== visualizationHeroViz) {
                mainPeriods.after(visualizationHeroViz);
            }
        }

        ScrollTrigger.create({
            trigger: ".visualization",
            start: "-=150 top",
            end: "120% bottom",
            // markers: true,
            onEnter: () =>
                document.querySelector("#head-full").classList.add("viz-show"),
            onEnterBack: () =>
                document.querySelector("#head-full").classList.add("viz-show"),
            onLeave: () =>
                document
                    .querySelector("#head-full")
                    .classList.remove("viz-show"),
            onLeaveBack: () =>
                document
                    .querySelector("#head-full")
                    .classList.remove("viz-show"),
        });
    };

    await scrollViz();
    paneles();
    panelZoom();
    // pinVideo();
    pinCards();
    setupThreeAnimation();

    // Único refresh, al final, cuando TODOS los ScrollTrigger ya existen
    // y el DOM (incluyendo los reordenamientos de scrollViz) está estable.
    ScrollTrigger.refresh();
};
