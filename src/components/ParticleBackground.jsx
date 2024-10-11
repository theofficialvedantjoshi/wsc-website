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
        renderer.setClearColor(0x000000, 0);
        containerRef.appendChild(renderer.domElement);
        const geometry = new THREE.BufferGeometry();
        const particleCount = 100;
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const material = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.1,
            transparent: true,
            opacity: 0.7,
            sizeAttenuation: true,
        });

        particles = new THREE.Points(geometry, material);
        scene.add(particles);

        camera.position.z = 5;
    };

    const animate = () => {
        requestAnimationFrame(animate);

        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.001;

        renderer.render(scene, camera);
    };

    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    onMount(() => {
        init();
        animate();
        window.addEventListener('resize', handleResize);
    });

    onCleanup(() => {
        window.removeEventListener('resize', handleResize);
        if (renderer) {
            renderer.dispose();
        }
    });

    return (
        <div
            ref={containerRef}
            class="fixed inset-0 w-full h-full pointer-events-none z-[-1]"
        />
    );
};

export default ParticleBackground;
