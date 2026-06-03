import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
// import { smoothScroll } from "./../utils/loadLocomotive.js";
import {
    getScrollInstance,
    destroyScroll,
    smoothScroll,
} from "./../utils/loadLocomotive.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
// import smoothScroll from "./../utils/loadLocomotive.js";
import GUI from "lil-gui";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
    ignoreMobileResize: true,
});

ScrollTrigger.defaults({
    invalidateOnRefresh: false,
});

// Variables globales para cleanup

const mediaQuery = window.matchMedia("(min-width:1280px)");
const mediaQueryLaptop = window.matchMedia("(min-width:1280px)");
const mediaQueryDesktop = window.matchMedia("(min-width:1440px)");
const mediaQueryFullwidth = window.matchMedia("(min-width:1920px)");
const mediaQuery4K = window.matchMedia("(min-width:2560px)");
const MODAL_VIDEO_ID = "modal-video";
const MODAL_VIDEO_SRC = "./video/intro_video_landscape.webm";

let modalVideoTrigger = null;
let modalVideoCleanup = null;
let sectionVideoWasPlaying = false;

const openModalVideo = async () => {
    const pageHome = document.querySelector(".page-home");
    const sectionVideo = document.querySelector(".video video");

    if (!pageHome) return;

    modalVideoCleanup?.();

    sectionVideoWasPlaying = Boolean(
        sectionVideo && !sectionVideo.paused && !sectionVideo.ended,
    );

    if (sectionVideoWasPlaying) {
        sectionVideo.pause();
    }

    // Desactivar scroll de locomotive
    const scrollInstance = getScrollInstance();
    if (scrollInstance) {
        scrollInstance.stop();
    }

    const modal = document.createElement("dialog");
    modal.id = MODAL_VIDEO_ID;
    modal.innerHTML = `
        <div class="modal--content">
            <button class="close" type="button" aria-label="Close video"></button>
            <video loop playsinline preload="metadata">
                <source src="${MODAL_VIDEO_SRC}" type="video/webm">
            </video>
        </div>
    `;

    pageHome.appendChild(modal);

    const video = modal.querySelector("video");
    const closeBtn = modal.querySelector(".close");

    const destroyModal = () => {
        video.pause();
        video.currentTime = 0;
        closeBtn.removeEventListener("click", closeHandler);
        modal.removeEventListener("close", modalCloseHandler);
        modal.remove();

        // Reactivar scroll de locomotive
        const scrollInstanceOnClose = getScrollInstance();
        if (scrollInstanceOnClose) {
            scrollInstanceOnClose.start();
        }

        if (sectionVideoWasPlaying && sectionVideo) {
            sectionVideo
                .play()
                .catch((error) =>
                    console.error("Section video resume failed:", error),
                );
        }

        sectionVideoWasPlaying = false;
        modalVideoCleanup = null;
    };

    const closeHandler = () => {
        if (modal.open) {
            modal.close();
        }
    };

    const modalCloseHandler = () => {
        destroyModal();
    };

    closeBtn.addEventListener("click", closeHandler);
    modal.addEventListener("close", modalCloseHandler);

    modalVideoCleanup = destroyModal;

    modal.showModal();

    try {
        await video.play();
    } catch (error) {
        console.error("Video autoplay failed:", error);
    }
};

//// HEADER

const scrollGsap = async () => {
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
                    // toogleActions: "restart pause reverse pause",
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
                    start: "bottom bottom",
                    pin: true,
                    pinSpacing: false,
                    end: "bottom top",
                    invalidateOnRefresh: true,
                    ignoreMobileResize: true,
                    // markers: true,
                });
            }
        });

        panelContent.forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "-=200 top",
                end: "bottom bottom",
                toogleActions: "restart pause reverse pause",
                // markers: true,
            });
        });

        if (!mediaQuery.matches) {
            // console.log("si");
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
                    section.className = section.className.replace(
                        /\bis-step-\d+/g,
                        "",
                    );
                    section.classList.add(`is-step-${step}`);
                },
            },
        });

        tl.to({}, { duration: 2 });

        items.forEach((item, i) => {
            if (i < items.length - 1) {
                const label = `step${i}`;

                tl.to(
                    item,
                    {
                        autoAlpha: 0,
                        y: -20,
                        duration: 1.5,
                    },
                    label,
                )
                    .to(
                        items[i + 1],
                        {
                            autoAlpha: 1,
                            y: 0,
                            duration: 1.5,
                        },
                        label,
                    )
                    .to(
                        image,
                        {
                            // scale: nextCam.scale,
                            // Animamos el objectPosition dinámicamente
                            // objectPosition: `${nextCam.x}% ${nextCam.y}px`,
                            duration: 2,
                            ease: "power2.inOut",
                        },
                        label,
                    )
                    .to({}, { duration: 2.5 }); // Pausa de lectura
            }
        });
    };

    const pinVideo = () => {
        const video = document.querySelector(".video");

        let scrollCount = 0;
        let isLocked = false;
        let lastScrollTime = 0;

        const handleWheel = (e) => {
            if (!isLocked) return;

            // Solo contar scroll hacia abajo
            if (e.deltaY <= 0) return;

            const now = Date.now();

            // Ignorar eventos generados por el mismo movimiento de rueda
            if (now - lastScrollTime < 300) return;

            lastScrollTime = now;
            scrollCount++;

            console.log(`Scroll ${scrollCount}/6`);

            if (scrollCount >= 6) {
                console.log("Reactivando Locomotive");

                const scrollInstance = getScrollInstance();

                if (scrollInstance) {
                    scrollInstance.start();
                }

                isLocked = false;
                scrollCount = 0;

                window.removeEventListener("wheel", handleWheel);
            }
        };

        ScrollTrigger.create({
            trigger: video,
            start: "top top",
            end: "+=105% center",
            // markers: true,

            onEnter: () => {
                // console.log("ENTRA A VIDEO - Desactivando scroll");

                isLocked = true;
                scrollCount = 0;
                lastScrollTime = 0;

                const scrollInstance = getScrollInstance();

                if (scrollInstance) {
                    scrollInstance.stop();
                }

                window.addEventListener("wheel", handleWheel, {
                    passive: true,
                });
            },

            onLeave: () => {
                // console.log("SALE DE VIDEO - Reactivando scroll");

                isLocked = false;
                scrollCount = 0;

                const scrollInstance = getScrollInstance();

                if (scrollInstance) {
                    scrollInstance.start();
                }

                window.removeEventListener("wheel", handleWheel);
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
                // targetRotationZ = base.z + progress * (Math.PI * 3);

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
            pageViz.insertAdjacentElement("afterend", visualizationSection);

            setTimeout(() => {
                visualizationSection.insertAdjacentElement(
                    "beforeend",
                    mainPeriods,
                );
            }, 1000);
        } else {
            visualizationSection.insertAdjacentElement(
                "afterend",
                visualizationHeroViz,
            );
            mainPeriods.insertAdjacentElement("afterend", visualizationHeroViz);
        }

        // ScrollTrigger.refresh();

        ScrollTrigger.create({
            trigger: ".visualization",
            start: "-=150 top",
            end: "120% bottom",
            // markers: true,
            onEnter: () => {
                document.querySelector("#head-full").classList.add("viz-show");
            },
            onEnterBack: () => {
                document.querySelector("#head-full").classList.add("viz-show");
            },
            onLeave: () => {
                document
                    .querySelector("#head-full")
                    .classList.remove("viz-show");
            },
            onLeaveBack: () => {
                document
                    .querySelector("#head-full")
                    .classList.remove("viz-show");
            },
        });
    };

    await scrollViz();
    paneles();
    panelZoom();
    pinVideo();
    pinCards();
    setupThreeAnimation();
};

const modalVideo = () => {
    const sectionVideo = document.querySelector(".video");
    const btnPlay = document.querySelector(".btn-play");

    if (modalVideoTrigger) {
        modalVideoTrigger.removeEventListener("click", openModalVideo);
    }

    modalVideoTrigger = mediaQuery.matches ? sectionVideo : btnPlay;

    if (modalVideoTrigger) {
        modalVideoTrigger.addEventListener("click", openModalVideo);
    }

    return () => {
        if (modalVideoTrigger) {
            modalVideoTrigger.removeEventListener("click", openModalVideo);
        }
        modalVideoCleanup?.();
        modalVideoTrigger = null;
    };
};

const videoHome = () => {
    const video = document.querySelector(".video video");
    const portraitSrc = "./video/Intro_video_portrait.webm";
    const landscapeSrc = "./video/Intro_video_landscape_no_audio.webm";

    function updateVideoSource() {
        const isPortrait = window.matchMedia("(orientation: portrait)").matches;
        const newSrc = isPortrait ? portraitSrc : landscapeSrc;

        // Solo cambiar si la fuente es diferente
        if (
            video.src !== window.location.origin + "/" + newSrc &&
            video.currentSrc !== window.location.origin + "/" + newSrc
        ) {
            const currentTime = video.currentTime;
            video.src = newSrc;
            video.currentTime = currentTime; // Mantener la posición del video
            video.play();
        }
    }

    // Ejecutar al cargar la página
    updateVideoSource();
    window
        .matchMedia("(orientation: portrait)")
        .addEventListener("change", updateVideoSource);
};

let model = null;
let modelShadow = null;
let scene = null;
let sceneShadow = null;
let renderer = null;
let camera = null;
let cameraShadow = null;
let rendererShadow = null;
let animationIdShadow = null;
let resizeHandler = null;
let resizeHandlerShadow = null;
let shadowModel = null;
let animationId = null;

let targetRotationX = 0;
let targetRotationY = 0;
let targetRotationZ = 0;
let targetPosX = 0;
let targetPosY = 0;

let sizeRender = [1, 1, 1];

const maxRotationX = Math.PI * 3;
const maxRotationY = Math.PI * 1;
const maxRotationZ = Math.PI * 3;
const maxMoveY = 4;
const maxMoveX = 0;

/* ==============================
   CONFIGURACIÓN POR DISPOSITIVO
============================== */

const CONFIG = {
    mobile: {
        baseRotation: { x: -1, y: -1, z: -0.5 },
        scale: [-1, 1, 1],
        position: [0.2, -4, 0],
        camara: [0, 0, 15],
        camaraShadow: [0, 0, 16],
    },
    laptop: {
        baseRotation: { x: -1.5, y: 4, z: -0.3 },
        scale: [-1, 1, 1],
        position: [0, -4.8, 0],
        camara: [0, 0, 12],
        camaraShadow: [-2, 2.5, 18.5],
    },
    desktop: {
        baseRotation: { x: -1.5, y: 4, z: -0.3 },
        scale: [-1, 1, 1],
        position: [0, -3.9, 0],
        camara: [0, 0, 10],
        camaraShadow: [-2, 2.5, 18.5],
    },
    fullwidth: {
        baseRotation: { x: -1.5, y: 4, z: -0.3 },
        scale: [-1, 1, 1],
        position: [0, -3, 0],
        camara: [0, 0, 8],
        camaraShadow: [-2, 2.5, 18.5],
    },
    fourk: {
        baseRotation: { x: -1.5, y: 4, z: -0.3 },
        scale: [-1, 1, 1],
        position: [0, -3.5, 0],
        camara: [0, 0, 9],
        camaraShadow: [-2, 2.5, 18.5],
    },
};

let currentConfig = CONFIG.mobile;
let lastBreakpoint = null;

function getDeviceConfig() {
    if (mediaQuery4K.matches) return CONFIG.fourk;
    if (mediaQueryFullwidth.matches) return CONFIG.fullwidth;
    if (mediaQueryDesktop.matches) return CONFIG.desktop;
    if (mediaQueryLaptop.matches) return CONFIG.laptop;
    return CONFIG.mobile;
}

currentConfig = getDeviceConfig();
// console.log("Current Config:", currentConfig);

/* ==============================
   ACTUALIZAR SEGÚN DISPOSITIVO
============================== */
async function updateDeviceConfig() {
    // 1. Detectar dispositivo actual
    currentConfig = getDeviceConfig();
    sizeRender = currentConfig.scale;

    if (model && modelShadow) {
        model.scale.set(...sizeRender);
        modelShadow.scale.set(...sizeRender);
        camera.lookAt(...currentConfig.position);
        // console.log(currentConfig.camara);
    }

    const mainElement = document.querySelector(".page-home");
    if (!mainElement) return;
    const rect = mainElement.getBoundingClientRect();
    //
    //     /* --- AJUSTE DE RENDERER Y CÁMARA PRINCIPAL --- */
    if (renderer && camera) {
        // Aplicar posición de cámara desde CONFIG
        camera.position.set(...currentConfig.camara);
        camera.lookAt(...currentConfig.position);
    }

    /* --- AJUSTE DE RENDERER Y CÁMARA DE SOMBRAS (Si existen) --- */
    if (rendererShadow && cameraShadow) {
        cameraShadow.position.set(...currentConfig.camaraShadow);
    }

    /* --- AJUSTE DEL MODELO Y TARGETS DE ANIMACIÓN --- */
    if (model) {
        // Actualizar escala
        model.scale.set(...currentConfig.scale);

        // RE-SINCRONIZAR TARGETS: Esto hace que el modelo "salte" o se mueva
        // a la posición inicial del nuevo dispositivo
        const base = currentConfig.baseRotation;
        targetRotationX = base.x;
        targetRotationY = base.y;
        targetRotationZ = base.z;

        // Si tienes posiciones base específicas en CONFIG, actualízalas aquí
        targetPosX = 0;
        targetPosY = 0;

        model.rotation.set(base.x, base.y, base.z);
        model.position.set(0, 0, 0);
        model.scale.set(...currentConfig.scale);
    }

    lastBreakpoint = mediaQuery.matches;

    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
    renderer.setSize(rect.width, rect.height);
    // shadow

    cameraShadow.aspect = rect.width / rect.height;
    cameraShadow.updateProjectionMatrix();

    rendererShadow.setSize(rect.width, rect.height);
}

/* ==============================
   RENDER
============================== */

const render = async () => {
    scene = new THREE.Scene();
    scene.background = null;

    const mainElement = document.querySelector(".page-home");
    const rect = mainElement.getBoundingClientRect();

    camera = new THREE.PerspectiveCamera(50, rect.width / rect.height, 1, 100);

    camera.position.set(...currentConfig.camara);
    camera.lookAt(...currentConfig.position);

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
    });

    renderer.setSize(rect.width, rect.height);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    if (mainElement) {
        mainElement.insertAdjacentElement("afterbegin", renderer.domElement);
    }

    /* ==============================
       LUCES
    ============================== */

    scene.add(new THREE.AmbientLight(0xffffff, 2));

    const dirLight = new THREE.DirectionalLight(0xffffff, 4);
    dirLight.position.set(10, 9, 3);
    scene.add(dirLight);

    /* ==============================
       MODELO
    ============================== */

    const loader = new OBJLoader();

    loader.load("./render/cerillo.obj", (obj) => {
        const box = new THREE.Box3().setFromObject(obj);
        const center = box.getCenter(new THREE.Vector3());

        const size = box.getSize(new THREE.Vector3());

        obj.position.sub(center);

        obj.position.y += size.y / 2;

        model = obj;
        scene.add(model);

        const base = currentConfig.baseRotation;

        targetRotationX = base.x;
        targetRotationY = base.y;
        targetRotationZ = base.z;

        targetPosX = 0;
        targetPosY = 0;

        model.rotation.set(base.x, base.y, base.z);
        model.position.set(0, 0, 0);
        model.scale.set(...currentConfig.scale);

        updateDeviceConfig();

        // 🔥 INICIALIZAR GUI AQUÍ
        // initDebugControls(camera, dirLight);
    });

    function animate() {
        animationId = requestAnimationFrame(animate);

        if (!model) return; // 🔥 evita mover antes de cargar

        const rotationSpeed = mediaQuery.matches ? 0.2 : 0.2;
        const positionSpeed = mediaQuery.matches ? 1 : 0.4;

        model.rotation.x +=
            (targetRotationX - model.rotation.x) * rotationSpeed;
        model.rotation.y +=
            (targetRotationY - model.rotation.y) * rotationSpeed;
        model.rotation.z +=
            (targetRotationZ - model.rotation.z) * rotationSpeed;

        model.position.y += (targetPosY - model.position.y) * positionSpeed;
        model.position.x += (targetPosX - model.position.x) * positionSpeed;

        renderer.render(scene, camera);
    }

    animate();

    /* ==============================
       RESIZE
    ============================== */

    resizeHandler = () => {
        if (!mainElement || !camera || !renderer) return;
        const rect = mainElement.getBoundingClientRect();

        // camera.aspect = rect.width / rect.height;
        // camera.updateProjectionMatrix();
        // renderer.setSize(rect.width, rect.height);

        // Solo llamar a updateDeviceConfig si cambió el breakpoint
        if (lastBreakpoint !== mediaQuery.matches) {
            updateDeviceConfig();
        }
    };

    window.addEventListener("resize", resizeHandler);

    // Agregar listeners a todos los media queries para actualizar configuración
    mediaQueryLaptop.addEventListener("change", updateDeviceConfig);
    mediaQueryDesktop.addEventListener("change", updateDeviceConfig);
    mediaQueryFullwidth.addEventListener("change", updateDeviceConfig);
    mediaQuery4K.addEventListener("change", updateDeviceConfig);

    /* ==============================
   OBSERVADOR DE CAMBIO DE TAMAÑO
============================== */

    const resizeObserver = new ResizeObserver(() => {
        requestAnimationFrame(() => {
            resizeHandler();
        });
    });

    if (mainElement) resizeObserver.observe(mainElement);

    return {
        camera,
        scene,
        renderer,
    };
};

const renderShadow = async () => {
    sceneShadow = new THREE.Scene();
    sceneShadow.background = null;

    const mainElement = document.querySelector(".page-home");
    const rect = mainElement.getBoundingClientRect();

    cameraShadow = new THREE.PerspectiveCamera(
        50,
        rect.width / rect.height,
        1,
        100,
    );

    cameraShadow.position.set(...currentConfig.camaraShadow);
    cameraShadow.lookAt(...currentConfig.position);

    rendererShadow = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
    });

    rendererShadow.setSize(rect.width, rect.height);

    rendererShadow.setPixelRatio(Math.min(window.devicePixelRatio, 0.1));

    if (mainElement) {
        mainElement.insertAdjacentElement(
            "afterbegin",
            rendererShadow.domElement,
        );
    }

    // ----------------------
    // MODELO OBJ (Versión Sombra)
    // ----------------------

    const loader = new OBJLoader();

    loader.load("./render/cerillo.obj", (obj) => {
        const box = new THREE.Box3().setFromObject(obj);
        const center = box.getCenter(new THREE.Vector3());

        const size = box.getSize(new THREE.Vector3());

        obj.position.sub(center);

        obj.position.y += size.y / 2;

        modelShadow = obj;

        modelShadow.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshBasicMaterial({
                    color: 0x000000, // Negro puro
                    transparent: true,
                    opacity: 0.1, // Controla qué tan tenue es la sombra
                });
            }
        });

        sceneShadow.add(modelShadow);

        // updateDeviceConfig();

        const base = currentConfig.baseRotation;

        targetRotationX = base.x;
        targetRotationY = base.y;
        targetRotationZ = base.z;

        targetPosX = 0;
        targetPosY = 0;

        modelShadow.rotation.set(base.x, base.y, base.z);
        modelShadow.position.set(0, 0, 0);
        modelShadow.scale.set(...currentConfig.scale);
    });

    // ----------------------
    // ANIMACIÓN
    // ----------------------
    function animate() {
        animationIdShadow = requestAnimationFrame(animate);

        if (!modelShadow) return; // 🔥 evita mover antes de cargar

        modelShadow.rotation.x +=
            (targetRotationX - modelShadow.rotation.x) * 0.2;
        modelShadow.rotation.y +=
            (targetRotationY - modelShadow.rotation.y) * 0.2;
        modelShadow.rotation.z +=
            (targetRotationZ - modelShadow.rotation.z) * 0.2;

        modelShadow.position.y += (targetPosY - modelShadow.position.y) * 0.1;
        modelShadow.position.x += (targetPosX - modelShadow.position.x) * 0.1;

        rendererShadow.render(sceneShadow, camera);
    }

    animate();

    // ----------------------
    // RESIZE
    // ----------------------
    resizeHandlerShadow = () => {
        if (!mainElement || !cameraShadow || !rendererShadow) return;

        const rect = mainElement.getBoundingClientRect();
        //
        //         cameraShadow.aspect = rect.width / rect.height;
        //         cameraShadow.updateProjectionMatrix();
        //
        //         rendererShadow.setSize(rect.width, rect.height);

        updateDeviceConfig();
    };

    window.addEventListener("resize", resizeHandlerShadow);
    mediaQueryLaptop.addEventListener("change", updateDeviceConfig);
    mediaQueryDesktop.addEventListener("change", updateDeviceConfig);
    mediaQueryFullwidth.addEventListener("change", updateDeviceConfig);
    mediaQuery4K.addEventListener("change", updateDeviceConfig);

    /* ==============================
   OBSERVADOR DE CAMBIO DE TAMAÑO
============================== */

    const resizeObserverShadow = new ResizeObserver(() => {
        requestAnimationFrame(() => {
            resizeHandlerShadow();
        });
    });

    if (mainElement) resizeObserverShadow.observe(mainElement);

    return {
        cameraShadow,
        sceneShadow,
        rendererShadow,
    };
};

const initScrollPosition = () => {
    // Si no hay hash en la URL, scroll al top
    if (!window.location.hash) {
        setTimeout(() => {
            const scrollInstance = getScrollInstance();
            if (scrollInstance) {
                scrollInstance.scrollTo(0, { duration: 0 });
            } else {
                window.scrollTo(0, 0);
            }
        }, 100);
    }
};

const init = async () => {
    render();
    renderShadow();
    smoothScroll();
    // initScrollPosition();
    scrollGsap();
    modalVideo();

    videoHome();
    // ScrollTrigger.refresh();
    mediaQueryLaptop.addEventListener("change", modalVideo);
};

init();
