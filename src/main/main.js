import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// 创建场景
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);
scene.add(camera)

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建立方体
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhysicalMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, 0);
scene.add(mesh);

// 创建光源
const light = new THREE.DirectionalLight(0xffffff);
light.position.set(1, 1, 1);
light.intensity = 0.5;
scene.add(light);

// 添加光源辅助器
const helper = new THREE.DirectionalLightHelper(light, 1);
scene.add(helper);

// 创建控制器
const controls = new OrbitControls(camera, renderer.domElement);

// 添加坐标轴辅助器
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// 渲染
// let preTime = null
// const clock = new THREE.Clock()
function render (time) {
    // if (!preTime) {
    //     preTime = time
    // }
    // const deltaTime = (time - preTime) / 1000
    // preTime = time
    // const deltaTime2 = clock.getDelta()
    mesh.rotateY(0.01)
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();
