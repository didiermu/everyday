import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { smoothScroll } from "./../utils/loadLocomotive.js";
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

//// HEADER

const scrollGsap = () => {
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

        const updatePanelClass = (index) => {
            panelContent.forEach((_, idx) => {
                document.body.classList.remove(`panel-${idx}`);
            });
            document.body.classList.add(`panel-${index}`);
        };

        panelContent.forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "-=200 top",
                end: "bottom bottom",
                toogleActions: "restart pause reverse pause",

                // onEnter: () => updatePanelClass(i),
                onEnterBack: () => updatePanelClass(i),
                onLeave: () => {
                    if (i < panels.length - 2) {
                        updatePanelClass(i + 1);
                    }
                },
                onLeaveBack: () => {
                    if (i > 0) {
                        updatePanelClass(i - 1);
                    }
                },
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
                start: mediaQuery.matches ? "-=130" : "top top",
                end: "+=300%",
                pin: true,
                pinSpacing: false,
                scrub: 1,
                // markers: true,
                onUpdate: (self) => {
                    // Lógica de clases precisa según el progreso
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

    const setupThreeAnimation = () => {
        ScrollTrigger.create({
            trigger: ".page-home",
            scroller: window,
            start: mediaQuery.matches ? "-=2%" : "+=2%",
            end: mediaQuery.matches ? "55% bottom" : "90% bottom",
            // markers: true,
            scrub: true,

            onUpdate: (self) => {
                const progress = self.progress;
                const base = currentConfig.baseRotation;

                targetRotationX = base.x + progress * (Math.PI * 3);
                targetRotationY = base.y + progress * (Math.PI * 1);
                // targetRotationZ = base.z + progress * (Math.PI * 3);

                targetPosY = -progress * 4;
                targetPosX = progress * 0;
            },
        });
    };

    paneles();
    pinCards();
    setupThreeAnimation();
};

const modalVideo = () => {
    const modal = document.getElementById("modal-video");
    const video = modal.querySelector("video");
    const sectionVideo = document.querySelector(".video");
    const btnPlay = document.querySelector(".btn-play");
    const closeBtn = document.querySelector("#modal-video .close");

    const playHandler = async () => {
        modal.showModal();
        video.play();
    };

    const closeHandler = () => {
        video.pause();
        video.currentTime = 0;
        modal.close();
    };

    const modalCloseHandler = () => {
        video.pause();
        video.currentTime = 0;
    };

    // Remover listeners previos si existen
    if (sectionVideo) sectionVideo.removeEventListener("click", playHandler);
    if (btnPlay) btnPlay.removeEventListener("click", playHandler);

    if (mediaQuery.matches) {
        if (sectionVideo) sectionVideo.addEventListener("click", playHandler);
    } else {
        if (btnPlay) btnPlay.addEventListener("click", playHandler);
    }

    // Listeners que siempre están activos
    if (closeBtn) closeBtn.addEventListener("click", closeHandler);
    if (modal) modal.addEventListener("close", modalCloseHandler);

    // Retornar función de limpieza
    return () => {
        if (sectionVideo)
            sectionVideo.removeEventListener("click", playHandler);
        if (btnPlay) btnPlay.removeEventListener("click", playHandler);
        if (closeBtn) closeBtn.removeEventListener("click", closeHandler);
        if (modal) modal.removeEventListener("close", modalCloseHandler);
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
    desktop: {
        baseRotation: { x: -0.8, y: -2.1, z: -0.3 },
        scale: [-1, 1, 1],
        position: [0, -8, 0],
        camara: [0, 0, 19.65],
        camaraShadow: [-2, 2.5, 18.5],
    },
};

let currentConfig = mediaQuery.matches ? CONFIG.desktop : CONFIG.mobile;

/* ==============================
   ACTUALIZAR SEGÚN DISPOSITIVO
============================== */

async function updateDeviceConfig() {
    currentConfig = mediaQuery.matches ? CONFIG.desktop : CONFIG.mobile;

    sizeRender = currentConfig.scale;

    if (model && modelShadow) {
        model.scale.set(...sizeRender);
        modelShadow.scale.set(...sizeRender);
        camera.lookAt(...currentConfig.position);
        // console.log(currentConfig.camara);
    }
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

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3));

    if (mainElement) {
        mainElement.insertAdjacentElement("afterbegin", renderer.domElement);
    }

    /* ==============================
       LUCES
    ============================== */

    scene.add(new THREE.AmbientLight(0xffffff, 2));

    const dirLight = new THREE.DirectionalLight(0xffffff, 4);
    dirLight.position.set(10, -9, 3);
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

    /* ==============================
       SCROLL → TRANSFORM
    ============================== */

    // const maxRotationX = Math.PI * 3;
    // const maxRotationY = Math.PI * 1;
    // const maxRotationZ = Math.PI * 3;
    // const maxMoveY = 4;
    // const maxMoveX = 0;

    //     window.addEventListener("scroll", () => {
    //         if (!mainElement) return;
    //
    //         const rect = mainElement.getBoundingClientRect();
    //         const containerHeight = mainElement.offsetHeight;
    //         const viewportHeight = window.innerHeight;
    //
    //         const totalScroll = containerHeight - viewportHeight;
    //         const startOffset = mediaQuery.matches ? 4600 : 4600;
    //         // desktop empieza 300px antes
    //
    //         const scrolled = -rect.top + startOffset;
    //
    //         const scrollFactor = mediaQuery.matches ? 1.5 : 1;
    //         const progress = THREE.MathUtils.clamp(
    //             (scrolled / totalScroll) * scrollFactor,
    //             0,
    //             1,
    //         );
    //
    //         // const progress = scrollY / (containerHeight * scrollFactor);
    //
    //         // console.log(progress);
    //
    //         const base = currentConfig.baseRotation;
    //
    //         targetRotationX = base.x + progress * maxRotationX;
    //         targetRotationY = base.y + progress * maxRotationY;
    //         targetRotationZ = base.z + progress * maxRotationZ;
    //
    //         targetPosY = -progress * maxMoveY;
    //         targetPosX = progress * maxMoveX;
    //     });

    /* ==============================
       ANIMACIÓN
    ============================== */

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

        //         model.rotation.x += (targetRotationX - model.rotation.x) * 0.2;
        //         model.rotation.y += (targetRotationY - model.rotation.y) * 0.2;
        //         model.rotation.z += (targetRotationZ - model.rotation.z) * 0.2;
        //
        //         model.position.y += (targetPosY - model.position.y) * 0.1;
        //         model.position.x += (targetPosX - model.position.x) * 0.1;

        renderer.render(scene, camera);
    }

    animate();

    /* ==============================
       RESIZE
    ============================== */

    resizeHandler = () => {
        if (!mainElement) return;

        const rect = mainElement.getBoundingClientRect();

        camera.aspect = rect.width / rect.height;
        camera.updateProjectionMatrix();

        renderer.setSize(rect.width, rect.height);

        updateDeviceConfig();
    };

    window.addEventListener("resize", resizeHandler);
    // mediaQuery.addEventListener("change", updateDeviceConfig);

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

    rendererShadow.setPixelRatio(Math.min(window.devicePixelRatio, 1));

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

        updateDeviceConfig();
    });

    // ----------------------
    // SCROLL → TRANSFORM
    // ----------------------

    //     const maxRotationX = Math.PI * 3;
    //     const maxRotationY = Math.PI * 1;
    //     const maxRotationZ = Math.PI * 3;
    //     const maxMoveY = 4;
    //     const maxMoveX = 0;
    //
    //     window.addEventListener("scroll", () => {
    //         if (!mainElement) return;
    //
    //         const rect = mainElement.getBoundingClientRect();
    //         const containerHeight = mainElement.offsetHeight;
    //         const viewportHeight = window.innerHeight;
    //
    //         const totalScroll = containerHeight - viewportHeight;
    //         const scrolled = -rect.top;
    //
    //         const progress = THREE.MathUtils.clamp(scrolled / totalScroll, 0, 1);
    //
    //         const base = currentConfig.baseRotation;
    //
    //         targetRotationX = base.x + progress * maxRotationX;
    //         targetRotationY = base.y + progress * maxRotationY;
    //         targetRotationZ = base.z + progress * maxRotationZ;
    //
    //         targetPosY = -progress * maxMoveY;
    //         targetPosX = progress * maxMoveX;
    //     });

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
        if (!mainElement) return;

        const rect = mainElement.getBoundingClientRect();

        camera.aspect = rect.width / rect.height;
        camera.updateProjectionMatrix();

        rendererShadow.setSize(rect.width, rect.height);

        updateDeviceConfig();
    };

    window.addEventListener("resize", resizeHandlerShadow);
    mediaQuery.addEventListener("change", updateDeviceConfig);

    return {
        camera,
        sceneShadow,
        rendererShadow,
    };
};

function initDebugControls(camera, dirLight) {
    const gui = new GUI();

    const controls = {
        rotX: targetRotationX,
        rotY: targetRotationY,
        rotZ: targetRotationZ,

        posX: targetPosX,
        posY: targetPosY,

        scaleX: sizeRender[0],
        scaleY: sizeRender[1],
        scaleZ: sizeRender[2],

        lightIntensity: dirLight.intensity,
        ambientIntensity: 2,

        cameraZ: camera.position.z,

        smoothRot: 0.2,
        smoothPos: 0.1,
    };

    // ROTACIÓN
    const folderRot = gui.addFolder("Rotation");
    folderRot
        .add(controls, "rotX", -10, 10, 0.01)
        .onChange((v) => (targetRotationX = v));
    folderRot
        .add(controls, "rotY", -10, 10, 0.01)
        .onChange((v) => (targetRotationY = v));
    folderRot
        .add(controls, "rotZ", -10, 10, 0.01)
        .onChange((v) => (targetRotationZ = v));

    // POSICIÓN
    const folderPos = gui.addFolder("Position");
    folderPos
        .add(controls, "posX", -10, 10, 0.01)
        .onChange((v) => (targetPosX = v));
    folderPos
        .add(controls, "posY", -10, 10, 0.01)
        .onChange((v) => (targetPosY = v));

    // ESCALA
    const folderScale = gui.addFolder("Scale");
    folderScale.add(controls, "scaleX", -10, 10, 0.1).onChange((v) => {
        sizeRender[0] = v;
        if (model) model.scale.set(...sizeRender);
    });
    folderScale.add(controls, "scaleY", -10, 10, 0.1).onChange((v) => {
        sizeRender[1] = v;
        if (model) model.scale.set(...sizeRender);
    });
    folderScale.add(controls, "scaleZ", -10, 10, 0.1).onChange((v) => {
        sizeRender[2] = v;
        if (model) model.scale.set(...sizeRender);
    });

    // LUCES
    const folderLight = gui.addFolder("Lights");
    folderLight.add(controls, "lightIntensity", 0, 10, 0.1).onChange((v) => {
        dirLight.intensity = v;
    });

    // CÁMARA
    const folderCamera = gui.addFolder("Camera");
    folderCamera.add(controls, "cameraZ", 1, 50, 0.1).onChange((v) => {
        camera.position.z = v;
    });

    // SMOOTH
    const folderSmooth = gui.addFolder("Smoothing");
    folderSmooth.add(controls, "smoothRot", 0.01, 1, 0.01);
    folderSmooth.add(controls, "smoothPos", 0.01, 1, 0.01);

    return controls;
}

const init = async () => {
    // render();
    // renderShadow();
    smoothScroll();
    scrollGsap();
    modalVideo();

    videoHome();
    // ScrollTrigger.refresh();
    mediaQuery.addEventListener("change", modalVideo);
};

init();
