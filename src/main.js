import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

// Escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffd3bc);

// Cámara
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Luces
scene.add(new THREE.AmbientLight(0xffffff, 0.6));

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(5, 5, 5);
scene.add(dirLight);

// Textura
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("./Fosfo.jpeg");

// Loader OBJ
let model;
const loader = new OBJLoader();

loader.load("./cerillo.obj", (obj) => {
    const box = new THREE.Box3().setFromObject(obj);
    const center = box.getCenter(new THREE.Vector3());
    obj.position.sub(center);

    obj.scale.set(2, 2, 2);

    model = obj;
    scene.add(obj);
});

// ----------------------
// SCROLL → ROTACIÓN
// ----------------------
let targetRotationX = 0;
let targetRotationY = 0;
let targetRotationZ = 0;

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Ajusta este multiplicador a tu gusto
    targetRotationX = scrollY * 0.002;
    targetRotationY = scrollY * 0.002;
    // targetRotationZ = scrollY * 0.002;
});

// ----------------------
// Animación
// ----------------------
function animate() {
    requestAnimationFrame(animate);

    if (model) {
        // suavizado
        model.rotation.x += (targetRotationX - model.rotation.x) * 0.1;
        model.rotation.y += (targetRotationY - model.rotation.y) * 0.1;
        // model.rotation.z += (targetRotationZ - model.rotation.z) * 0.1;
    }

    renderer.render(scene, camera);
}

animate();

// Resize
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// const axes = new THREE.AxesHelper(2);
// scene.add(axes);
