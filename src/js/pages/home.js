import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

const modalVideo = () => {
    const modal = document.getElementById("modal-video");
    const video = modal.querySelector("video");

    document.querySelector(".btn-play").addEventListener("click", () => {
        modal.showModal();
        video.play();
    });

    document
        .querySelector("#modal-video .close")
        .addEventListener("click", () => {
            video.pause();
            video.currentTime = 0;
            modal.close();
        });

    modal.addEventListener("close", () => {
        video.pause();
        video.currentTime = 0;
    });
};

const render = () => {
    // ----------------------
    // ESCENA
    // ----------------------
    const scene = new THREE.Scene();
    scene.background = null;

    // ----------------------
    // CÁMARA (frontal)
    // ----------------------
    const camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    );
    camera.position.set(0, 0, 6);
    camera.lookAt(0, 0, 0);

    // ----------------------
    // RENDERER
    // ----------------------
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    document.querySelector("main").appendChild(renderer.domElement);

    // ----------------------
    // LUCES
    // ----------------------
    scene.add(new THREE.AmbientLight(0xffffff, 0.9));

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.6);
    dirLight.position.set(2, 3, 5);
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
            size * 0.5
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
        })
    );

    // sombra plana a cámara
    shadowPlane.rotation.x = 1;
    shadowPlane.rotation.y = -1;
    shadowPlane.rotation.z = -1;

    shadowPlane.position.set(0.3, 0.4, 0.1);

    // ----------------------
    // MODELO OBJ
    // ----------------------
    let model;
    const loader = new OBJLoader();

    loader.load("./render/cerillo.obj", (obj) => {
        const box = new THREE.Box3().setFromObject(obj);
        const center = box.getCenter(new THREE.Vector3());
        obj.position.sub(center);

        obj.scale.set(-1, 1, 1);

        model = obj;

        // 🔥 LA CLAVE
        model.add(shadowPlane);

        scene.add(model);
    });

    // ----------------------
    // SCROLL → TRANSFORM
    // ----------------------
    let targetRotationX = 0;
    let targetRotationY = 0;
    let targetPosX = 0;
    let targetPosY = 0;

    const maxRotationX = Math.PI * 3;
    const maxRotationY = Math.PI * 3;
    const maxMoveY = 2.5;
    const maxMoveX = -1;

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const maxScrollY = document.body.scrollHeight - window.innerHeight;
        const progress = Math.min(scrollY / maxScrollY, 1);

        targetRotationX = progress * maxRotationX;
        targetRotationY = progress * maxRotationY;
        targetPosY = -progress * maxMoveY;
        targetPosX = progress * maxMoveX;
    });

    // ----------------------
    // ANIMACIÓN
    // ----------------------
    function animate() {
        requestAnimationFrame(animate);

        if (model) {
            // MODELO
            model.rotation.x += (targetRotationX - model.rotation.x) * 0.2;
            model.rotation.y += (targetRotationY - model.rotation.y) * 0.2;
            model.position.y += (targetPosY - model.position.y) * 0.1;
            model.position.x += (targetPosX - model.position.x) * 0.1;

            // SOMBRA → deformación orgánica
            const height = Math.abs(model.position.y);
            const stretch = THREE.MathUtils.clamp(1 + height * 0.25, 1, 1.6);
            shadowPlane.scale.set(stretch, 1, 1);

            // ligera rotación visual
            shadowPlane.rotation.z = -model.rotation.y * 0.4;
        }

        renderer.render(scene, camera);
    }

    animate();

    // ----------------------
    // RESIZE
    // ----------------------
    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
};

export function init() {
    modalVideo();
    render();
}

// init();
