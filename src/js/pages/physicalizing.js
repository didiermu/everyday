import Swiper from "swiper";
import { EffectCreative } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

import "swiper/css";
import "swiper/css/effect-creative";

gsap.registerPlugin(ScrollTrigger);

// let locomotiveInstance = null;

// Función para obtener el slide activo real (manejando el modo loop)
const getActiveSlide = (swiper) => {
    return swiper.slides[swiper.activeIndex];
};

// Función para reproducir el video si existe en el slide
const playVideoInSlide = (slide) => {
    if (!slide) return;
    const video = slide.querySelector("video");
    if (video) {
        video.muted = true; // La mayoría de los navegadores bloquean autoplay con sonido
        video
            .play()
            .catch((error) => console.log("Autoplay bloqueado:", error));
    }
};

// Función para detener TODOS los videos de la galería
const stopAllVideos = (swiper) => {
    swiper.slides.forEach((slide) => {
        const video = slide.querySelector("video");
        if (video) {
            video.pause();
            video.currentTime = 0; // Opcional: reinicia el video
        }
    });
};

const slider = () => {
    const el = document.querySelector(".swiper-galeria");
    if (!el) return;

    const swiperGaleria = new Swiper(el, {
        modules: [EffectCreative],
        direction: "horizontal",
        slidesPerView: 1.8,
        centeredSlides: true,
        loop: true,
        effect: "creative",
        // cssMode: true,
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
        breakpoints: {
            1280: {
                slidesPerView: 3,
            },
        },
        on: {
            init(swiper) {
                // Al iniciar, nos aseguramos de que el primero suene/se mueva
                const slide = getActiveSlide(swiper);
                playVideoInSlide(slide);
            },
            slideChangeTransitionStart(swiper) {
                // Detenemos todo en cuanto empieza el movimiento para evitar ruidos visuales
                stopAllVideos(swiper);
            },
            slideChangeTransitionEnd(swiper) {
                // Reproducimos el video del slide donde aterrizamos
                const slide = getActiveSlide(swiper);
                playVideoInSlide(slide);
            },
        },
    });
};

const duplicateSlides = (swiperSelector, times = 2) => {
    const swiperContainer = document.querySelector(swiperSelector);
    if (!swiperContainer) return;

    const slides = Array.from(swiperContainer.querySelectorAll("h4"));

    for (let i = 0; i < times; i++) {
        slides.forEach((slide) => {
            const clone = slide.cloneNode(true);
            clone.classList.add("cloned");
            swiperContainer.appendChild(clone);
        });
    }
};

function createMarquee({
    container,
    speed = 10,
    direction = "left",
    gap = 40,
}) {
    const marquee =
        typeof container === "string"
            ? document.querySelector(container)
            : container;

    if (!marquee) return;

    const track = marquee.querySelector(".marquee");
    if (!track) return;

    // Medir ancho real
    const totalWidth = track.scrollWidth / 2;

    const tween = gsap.to(track, {
        x: direction === "left" ? -totalWidth : totalWidth,
        duration: speed,
        ease: "none",
        repeat: -1,
    });

    return tween;
}

function createMarqueeImg({ container, speed = 10, direction = "left" }) {
    const marquee =
        typeof container === "string"
            ? document.querySelector(container)
            : container;
    if (!marquee) return;

    const track = marquee.querySelector(".carousel-all--marquee");
    if (!track) return;

    // Clonar las imágenes existentes para el efecto infinito
    const pictures = Array.from(track.querySelectorAll("picture"));
    pictures.forEach((picture) => {
        const clone = picture.cloneNode(true);
        track.appendChild(clone);
    });

    // Esperar a que las imágenes carguen
    const images = track.querySelectorAll("img");
    Promise.all(
        Array.from(images).map((img) => {
            if (img.complete) return Promise.resolve();
            return new Promise((resolve) => {
                img.onload = resolve;
                img.onerror = resolve;
            });
        }),
    ).then(() => {
        // Medir ancho de la mitad (imágenes originales)
        const totalWidth = track.scrollWidth / 2;

        // Crear animación
        const tween = gsap.to(track, {
            x: direction === "left" ? -totalWidth : totalWidth,
            duration: speed,
            ease: "none",
            repeat: -1,
        });

        return tween;
    });
}

const videoSection = () => {
    gsap.utils.toArray(".video-section").forEach((section) => {
        const video = section.querySelector("video");

        ScrollTrigger.create({
            trigger: section,
            start: "top 60%",
            end: "bottom 40%",
            // markers: true,

            onEnter: () => video.play(),
            onEnterBack: () => video.play(),

            onLeave: () => {
                video.pause();
                video.currentTime = 0;
            },
            onLeaveBack: () => {
                video.pause();
                video.currentTime = 0;
            },
        });
    });
};

const initPsych = () => {
    videoSection();
    slider();
    duplicateSlides(".marquee", 20);
    createMarquee({ container: ".expand__image", speed: 50 });
    createMarqueeImg({ container: ".carousel-all", speed: 60 });
};

initPsych();
