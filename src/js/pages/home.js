import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { smoothScroll } from "./../utils/loadLocomotive.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
// import smoothScroll from "./../utils/loadLocomotive.js";
gsap.registerPlugin(ScrollTrigger);

// Variables globales para cleanup

const mediaQuery = window.matchMedia("(min-width:1280px)");

const scrollGsap = () => {
    const paneles = () => {
        const panels = gsap.utils.toArray(".panel");
        const panelContent = gsap.utils.toArray(".panel__content");
        panels.forEach((panel, i) => {
            if (i < panels.length - 1) {
                ScrollTrigger.create({
                    trigger: panel,
                    start: "bottom bottom",
                    pin: true,
                    pinSpacing: false,
                    end: "bottom top",
                    invalidateOnRefresh: true,
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

                onEnter: () => updatePanelClass(i),
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
    };

    const pinCards = () => {
        const section = document.querySelector(".page-physicalizing--moments");
        const items = gsap.utils.toArray(".expand__image__info");
        const image = document.querySelector(".expand__image--fondo img");

        gsap.set(items, { autoAlpha: 0, y: 20 });
        gsap.set(items[0], { autoAlpha: 1, y: 0 });

        const cameraSettings = [
            { scale: 1.0, x: -110, y: 0 },
            { scale: 2, x: 85, y: 20 },
            { scale: 1.2, x: 0, y: -30 },
            { scale: 1.2, x: 0, y: -30 },
        ];

        gsap.set(items, { autoAlpha: 0, y: 20 });
        gsap.set(items[0], { autoAlpha: 1, y: 0 });
        // Set inicial de la imagen
        // gsap.set(image, {
        //     scale: cameraSettings[0].scale,
        //     objectPosition: `${cameraSettings[0].x}vw ${cameraSettings[0].y}%`,
        // });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "+=200%",
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
                const nextCam = cameraSettings[i + 1];
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

    paneles();
    pinCards();
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
    const portraitSrc = "./video/Intro_video_portrait.mp4";
    const landscapeSrc = "./video/Intro_video_landscape_no_audio.mp4";

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

let renderer = null;
let rendererShadow = null;
let animationId = null;
let animationIdShadow = null;
let resizeHandler = null;
let resizeHandlerShadow = null;
let model = null;
let modelShadow = null;
let scene = null;
let sceneShadow = null;
let shadowModel = null;
let targetRotationX = -1;
let targetRotationY = -1;
let targetRotationZ = -0.5;
let targetPosX = 0;
let targetPosY = 0;
let sizeRender = [-1, 1, 1];
let baseRotation = 0;

function updateScale() {
    baseRotation = -0.05;

    if (mediaQuery.matches) {
        sizeRender = [2.3, 2.3, 2.3];
    } else {
        sizeRender = [-1, 1, 1];
    }

    if (model) {
        model.scale.set(...sizeRender);
        model.rotation.z = baseRotation;
    }

    if (modelShadow) {
        modelShadow.scale.set(...sizeRender);
        modelShadow.rotation.z = baseRotation;
    }
}

const render = async () => {
    // ----------------------
    // ESCENA
    // ----------------------
    scene = new THREE.Scene();
    scene.background = null;

    // ----------------------
    // CÁMARA (frontal)
    // ----------------------

    const camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        1,
        100,
    );
    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);

    // ----------------------
    // RENDERER
    // ----------------------
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    // renderer.domElement.style.transform = "translate(30px, -130px)";

    const mainElement = document.querySelector(".page-home");
    if (mainElement) {
        mainElement.insertAdjacentElement("afterbegin", renderer.domElement);
    }

    // ----------------------
    // LUCES
    // ----------------------
    scene.add(new THREE.AmbientLight(0xffffff, 2));

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(10, -9, 3);
    // .set(17.8, 4.3, 6.6)
    dirLight.intensity = 4;
    scene.add(dirLight);

    // ----------------------
    // MODELO OBJ
    // ----------------------
    const loader = new OBJLoader();

    loader.load("./render/cerillo.obj", (obj) => {
        const box = new THREE.Box3().setFromObject(obj);
        const center = box.getCenter(new THREE.Vector3());
        obj.position.sub(center);

        model = obj;
        model.rotation.set(targetRotationX, targetRotationY, targetRotationZ);
        scene.add(model);

        updateScale();

        // initReplicaControls();
    });

    // ----------------------
    // SCROLL → TRANSFORM
    // ----------------------

    const maxRotationX = Math.PI * 3;
    const maxRotationY = Math.PI * 1;
    const maxRotationZ = Math.PI * 3;
    const maxMoveY = 3;
    const maxMoveX = 0;

    // ✅ Mantén el scroll nativo para Three.js
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const maxScrollY =
            document.querySelector(".page-home").scrollHeight -
            window.innerHeight;

        const progress = Math.min(scrollY / maxScrollY, 1);

        targetRotationX = -1 + progress * maxRotationX;
        targetRotationY = -1 + progress * maxRotationY;
        targetRotationZ = -0.1 + progress * maxRotationZ;

        targetPosY = 0 - progress * maxMoveY;
        targetPosX = 0 + progress * maxMoveX;
    });

    // ----------------------
    // ANIMACIÓN
    // ----------------------
    function animate() {
        animationId = requestAnimationFrame(animate);

        if (model) {
            // 1. Movimiento del Cerillo
            model.rotation.x += (targetRotationX - model.rotation.x) * 0.2;

            model.rotation.y += (targetRotationY - model.rotation.y) * 0.2;

            // model.rotation.z += (targetRotationZ - model.rotation.z) * 0.2;

            model.position.y += (targetPosY - model.position.y) * 0.1;

            model.position.x += (targetPosX - model.position.x) * 0.1;
        }

        if (renderer && scene && camera) {
            renderer.render(scene, camera);
        }
    }

    animate();

    // ----------------------
    // RESIZE
    // ----------------------
    resizeHandler = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        // if (renderer) {
        //     renderer.setSize(window.innerWidth, window.innerHeight);
        // }

        updateScale();
    };

    window.addEventListener("resize", resizeHandler);

    // ----------------------
    // RETORNAR FUNCIONES PARA CONTROL EXTERNO
    // ----------------------
    return {
        updateProgress: (progress) => {
            targetRotationX = progress * maxRotationX;
            targetRotationY = progress * maxRotationY;
            targetPosY = -progress * maxMoveY;
            targetPosX = progress * maxMoveX;
        },
        camera,
        scene,
        renderer,
    };
};

const renderShadow = async () => {
    // ----------------------
    // ESCENA
    // ----------------------
    sceneShadow = new THREE.Scene();
    sceneShadow.background = null;

    // ----------------------
    // CÁMARA (frontal)
    // ----------------------

    const camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        1,
        100,
    );
    camera.position.set(0, 0, 12);
    camera.lookAt(0.2, 0, 0);

    // ----------------------
    // RENDERER
    // ----------------------
    rendererShadow = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
    });
    rendererShadow.setSize(window.innerWidth, window.innerHeight);
    rendererShadow.setPixelRatio(Math.min(window.devicePixelRatio, 1));

    const mainElement = document.querySelector(".page-home");
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
        obj.position.sub(center);

        modelShadow = obj;

        // --- FORZAR MATERIAL DE SOMBRA ---
        modelShadow.traverse((child) => {
            if (child.isMesh) {
                child.material = new THREE.MeshBasicMaterial({
                    color: 0x000000, // Negro puro
                    transparent: true,
                    opacity: 0.1, // Controla qué tan tenue es la sombra
                });
            }
        });

        modelShadow.rotation.set(
            targetRotationX,
            targetRotationY,
            targetRotationZ,
        );

        sceneShadow.add(modelShadow);
        updateScale();
    });

    // ----------------------
    // SCROLL → TRANSFORM
    // ----------------------

    const maxRotationX = Math.PI * 3;
    const maxRotationY = Math.PI * 1;
    const maxRotationZ = Math.PI * 3;
    const maxMoveY = 3;
    const maxMoveX = 0;

    // ✅ Mantén el scroll nativo para Three.js
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const maxScrollY =
            document.querySelector(".page-home").scrollHeight -
            window.innerHeight;
        const progress = Math.min(scrollY / maxScrollY, 1);

        targetRotationX = -1 + progress * maxRotationX;
        targetRotationY = -1 + progress * maxRotationY;
        targetRotationZ = -0.1 + progress * maxRotationZ;

        targetPosY = 0 - progress * maxMoveY;
        targetPosX = 0 + progress * maxMoveX;
    });

    // ----------------------
    // ANIMACIÓN
    // ----------------------
    function animate() {
        animationIdShadow = requestAnimationFrame(animate);

        if (modelShadow) {
            // 1. Movimiento del Cerillo
            modelShadow.rotation.x +=
                (targetRotationX - modelShadow.rotation.x) * 0.2;

            modelShadow.rotation.y +=
                (targetRotationY - modelShadow.rotation.y) * 0.2;

            // modelShadow.rotation.z +=
            //     (targetRotationZ - modelShadow.rotation.z) * 0.2;

            modelShadow.position.y +=
                (targetPosY - modelShadow.position.y) * 0.1;
            modelShadow.position.x +=
                (targetPosX - modelShadow.position.x) * 0.1;
        }

        if (rendererShadow && sceneShadow && camera) {
            rendererShadow.render(sceneShadow, camera);
        }
    }

    animate();

    // ----------------------
    // RESIZE
    // ----------------------
    resizeHandlerShadow = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        // if (renderer) {
        //     renderer.setSize(window.innerWidth, window.innerHeight);
        // }

        updateScale();
    };

    window.addEventListener("resize", resizeHandlerShadow);

    // ----------------------
    // RETORNAR FUNCIONES PARA CONTROL EXTERNO
    // ----------------------
    return {
        updateProgress: (progress) => {
            targetRotationX = progress * maxRotationX;
            targetRotationY = progress * maxRotationY;
            targetPosY = -progress * maxMoveY;
            targetPosX = progress * maxMoveX;
        },
        camera,
        sceneShadow,
        rendererShadow,
    };
};

const init = async () => {
    render();
    renderShadow();
    modalVideo();
    scrollGsap();
    smoothScroll();

    // videoHome();

    mediaQuery.addEventListener("change", modalVideo);
};

init();
