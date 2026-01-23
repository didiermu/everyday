import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { smoothScroll } from "./../utils/loadLocomotive.js";

// Variables globales para cleanup
let locomotiveInstance = null;
let renderer = null;
let animationId = null;
let resizeHandler = null;
let model = null;
let scene = null;
const mediaQuery = window.matchMedia("(min-width:1280px)");

let sizeRender = [-1, 1, 1];
let baseRotation = 0;

const currentDate = () => {
    const fechaEL = document.querySelector("#current-date");
    const fecha = new Date();
    const opciones = { year: "numeric", month: "long", day: "numeric" };
    const fechaFormateada = fecha.toLocaleDateString("en-US", opciones);

    fechaEL.textContent = fechaFormateada;
};

const modalVideo = () => {
    const modal = document.getElementById("modal-video");
    const video = modal.querySelector("video");
    const sectionVideo = document.querySelector(".video");
    const btnPlay = document.querySelector(".btn-play");
    const closeBtn = document.querySelector("#modal-video .close");

    const playHandler = () => {
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

function updateScale() {
    if (mediaQuery.matches) {
        sizeRender = [2.3, 2.3, 2.3];
        baseRotation = -0.3;
        renderer.domElement.style.top = "60px";
        renderer.domElement.style.left = "-10px";
    } else {
        sizeRender = [-1, 1, 1];
        renderer.domElement.style.top = "-130px";
        renderer.domElement.style.left = "30px";
    }

    if (model) {
        model.scale.set(...sizeRender);
        model.rotation.z = baseRotation;
    }
}

const render = (locomotiveScroll) => {
    // ----------------------
    // ESCENA
    // ----------------------
    scene = new THREE.Scene();
    scene.background = null;

    // ----------------------
    // CÁMARA (frontal)
    // ----------------------
    const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        100,
    );
    camera.position.set(0, 0, 6);
    camera.lookAt(0, 0, 0);

    // ----------------------
    // RENDERER
    // ----------------------
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = "-130px";
    renderer.domElement.style.left = "30px";
    renderer.domElement.style.pointerEvents = "none";

    const mainElement = document.querySelector("main");
    if (mainElement) {
        mainElement.insertAdjacentElement("afterbegin", renderer.domElement);
    }

    // ----------------------
    // LUCES
    // ----------------------
    scene.add(new THREE.AmbientLight(0xffffff, 2));

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.6);
    dirLight.position.set(2, 0.3, 5);
    scene.add(dirLight);

    // ----------------------
    // SOMBRA FAKE (TEXTURA)
    // ----------------------
    function createShadowTexture() {
        const size = 256;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;

        const ctx = canvas.getContext("2d");
        const gradient = ctx.createRadialGradient(
            size / 2,
            size / 2,
            size * 0.15,
            size / 2,
            size / 2,
            size * 0.5,
        );

        gradient.addColorStop(0, "rgba(0,0,0,0.1)");
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size, size);

        return new THREE.CanvasTexture(canvas);
    }

    const shadowPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 0.5),
        new THREE.MeshBasicMaterial({
            map: createShadowTexture(),
            transparent: true,
            depthWrite: false,
        }),
    );

    shadowPlane.rotation.x = 1;
    shadowPlane.rotation.y = -1;
    shadowPlane.rotation.z = -1;
    shadowPlane.position.set(0.3, 0.4, 0.1);

    // ----------------------
    // MODELO OBJ
    // ----------------------
    const loader = new OBJLoader();

    loader.load("./render/cerillo.obj", (obj) => {
        const box = new THREE.Box3().setFromObject(obj);
        const center = box.getCenter(new THREE.Vector3());
        obj.position.sub(center);

        model = obj;
        scene.add(model);

        updateScale();

        if (locomotiveScroll) {
            setTimeout(() => locomotiveScroll.update(), 200);
        }
    });

    // ----------------------
    // SCROLL → TRANSFORM
    // ----------------------
    let targetRotationX = 0;
    let targetRotationY = 0;
    let targetPosX = 0;
    let targetPosY = 0;

    const maxRotationX = Math.PI * 6;
    const maxRotationY = Math.PI * 6;
    const maxMoveY = 3;
    const maxMoveX = -5;

    let scrollHandler = null;

    if (locomotiveScroll) {
        scrollHandler = (args) => {
            const scrollY = args.scroll.y;
            const maxScrollY = args.limit.y;
            const progress =
                maxScrollY > 0 ? Math.min(scrollY / maxScrollY, 1) : 0;

            targetRotationX = progress * maxRotationX;
            targetRotationY = progress * maxRotationY;
            targetPosY = -progress * maxMoveY;
            targetPosX = progress * maxMoveX;
        };

        locomotiveScroll.on("scroll", scrollHandler);
    } else {
        scrollHandler = () => {
            const scrollY = window.scrollY;
            const maxScrollY = document.body.scrollHeight - window.innerHeight;
            const progress = Math.min(scrollY / maxScrollY, 1);

            targetRotationX = progress * maxRotationX;
            targetRotationY = progress * maxRotationY;
            targetPosY = -progress * maxMoveY;
            targetPosX = progress * maxMoveX;
        };

        window.addEventListener("scroll", scrollHandler);
    }

    // ----------------------
    // ANIMACIÓN
    // ----------------------
    function animate() {
        animationId = requestAnimationFrame(animate);

        if (model) {
            model.rotation.x += (targetRotationX - model.rotation.x) * 0.2;
            model.rotation.y += (targetRotationY - model.rotation.y) * 0.2;
            model.position.y += (targetPosY - model.position.y) * 0.1;
            model.position.x += (targetPosX - model.position.x) * 0.1;

            const height = Math.abs(model.position.y);
            const stretch = THREE.MathUtils.clamp(1 + height * 0.25, 1, 1.6);
            shadowPlane.scale.set(stretch, 1, 1);
            shadowPlane.rotation.z = -model.rotation.y * 0.4;
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

        if (renderer) {
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        updateScale();

        if (locomotiveScroll) {
            locomotiveScroll.update();
        }
    };

    window.addEventListener("resize", resizeHandler);

    // Retornar función de limpieza
    return {
        scrollHandler,
        locomotiveScroll,
    };
};

let cleanupModal = null;
let renderCleanup = null;

const handleMediaChange = () => {
    // Limpiar listeners anteriores
    if (cleanupModal) {
        cleanupModal();
    }
    // Reinicializar con la nueva configuración
    cleanupModal = modalVideo();
};

export function init() {
    smoothScroll();
    currentDate();
    cleanupModal = modalVideo();
    locomotiveInstance = smoothScroll();
    renderCleanup = render(locomotiveInstance);
    videoHome();

    // Escuchar cambios en el mediaQuery
    mediaQuery.addEventListener("change", handleMediaChange);
}

export function destroy() {
    // Limpiar animación
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }

    // Limpiar event listeners
    if (resizeHandler) {
        window.removeEventListener("resize", resizeHandler);
        resizeHandler = null;
    }

    // Limpiar scroll handler
    if (renderCleanup) {
        if (renderCleanup.locomotiveScroll && renderCleanup.scrollHandler) {
            renderCleanup.locomotiveScroll.off(
                "scroll",
                renderCleanup.scrollHandler,
            );
        } else if (renderCleanup.scrollHandler) {
            window.removeEventListener("scroll", renderCleanup.scrollHandler);
        }
        renderCleanup = null;
    }

    // Limpiar Locomotive
    if (locomotiveInstance) {
        locomotiveInstance.destroy();
        locomotiveInstance = null;
    }

    // Limpiar Three.js
    if (model) {
        model.traverse((child) => {
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
                if (Array.isArray(child.material)) {
                    child.material.forEach((mat) => mat.dispose());
                } else {
                    child.material.dispose();
                }
            }
        });
        model = null;
    }

    if (scene) {
        scene.traverse((object) => {
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
                if (Array.isArray(object.material)) {
                    object.material.forEach((mat) => {
                        if (mat.map) mat.map.dispose();
                        mat.dispose();
                    });
                } else {
                    if (object.material.map) object.material.map.dispose();
                    object.material.dispose();
                }
            }
        });
        scene.clear();
        scene = null;
    }

    if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss();
        if (renderer.domElement && renderer.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
        renderer = null;
    }

    // Limpiar modal
    if (cleanupModal) {
        cleanupModal();
        cleanupModal = null;
    }
}
