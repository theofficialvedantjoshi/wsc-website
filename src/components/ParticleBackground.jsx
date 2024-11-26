import { onMount, onCleanup } from 'solid-js';
import * as THREE from 'three';

const ParticleBackground = () => {
    let containerRef;
    let scene, camera, renderer, particles;

    const createTransparentDollarTexture = () => {
        const canvas = document.createElement('canvas');
        const size = 128; // Canvas size (smaller for optimization)
        canvas.width = size;
        canvas.height = size;

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, size, size); // Ensure background is transparent
        ctx.fillStyle = 'white'; // Color for the dollar sign
        ctx.font = 'bold 100px Arial'; // Font and size for the dollar sign
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('$', size / 2, size / 2);

        return new THREE.CanvasTexture(canvas);
    };

    const init = () => {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.appendChild(renderer.domElement);

        const geometry = new THREE.BufferGeometry();
        const particleCount = 300; // Reduced number of particles
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10; // Spread particles over a smaller area
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const dollarTexture = createTransparentDollarTexture();

        const material = new THREE.PointsMaterial({
            map: dollarTexture,
            size: 0.2, // Smaller size for the dollar signs
            transparent: true,
            opacity: 0.8, // Slight transparency for better aesthetics
        });

        particles = new THREE.Points(geometry, material);
        scene.add(particles);

        camera.position.z = 5;
        console.log('Three.js scene initialized');
    };

    const animate = () => {
        requestAnimationFrame(animate);
        particles.rotation.x += 0.0006; // Slow rotation for the particle system
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
