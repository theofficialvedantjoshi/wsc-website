import { onMount, onCleanup } from 'solid-js';
import * as THREE from 'three';

const ParticleBackground = () => {
    let containerRef;
    let scene, camera, renderer, particles;

    const init = () => {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.appendChild(renderer.domElement);

        const geometry = new THREE.BufferGeometry();
        const particleCount = 1000;
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.05,
            transparent: true,
            opacity: 0.5,
        });

        particles = new THREE.Points(geometry, material);
        scene.add(particles);

        camera.position.z = 5;
        console.log('Three.js scene initialized');
    };

    const animate = () => {
        requestAnimationFrame(animate);
        particles.rotation.x += 0.0006;
        particles.rotation.y += 0.0006;
        renderer.render(scene, camera);
    };

    onMount(() => {
        console.log('Component mounted');
        init();
        animate();
    });

    onCleanup(() => {
        console.log('Component cleanup');
        if (renderer) {
            renderer.dispose();
        }
    });

    return (
        <div
            ref={containerRef}
            class="fixed inset-0 w-full h-full pointer-events-none z-[-1]"
            style={{ "background-color": "rgba(0, 0, 0, 0.1)" }}
        />
    );
};

export default ParticleBackground;