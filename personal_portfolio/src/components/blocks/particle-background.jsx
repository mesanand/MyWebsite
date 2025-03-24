"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    
    // Fully transparent clear color
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const vertexCount = 1500;
    const vertices = [];
    const colors = [];
    const spread = 160;

    for (let i = 0; i < vertexCount; i++) {
      // Position each vertex randomly within the spread
      vertices.push(
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread
      );

      // Generate a random blue hue (0.55 to 0.75)
      const hue = 0.55 + Math.random() * 0.2;
      const saturation = 0.8;
      const lightness = 0.5;
      const color = new THREE.Color().setHSL(hue, saturation, lightness);
      colors.push(color.r, color.g, color.b);
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({
      size: 0.9,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    camera.position.z = 60;

    let frame = 0;
    const animate = () => {
      frame += 0.004;
      requestAnimationFrame(animate);
      
      particles.rotation.x = frame * 0.2;
      particles.rotation.y = frame * 0.3;
      
      // Slightly animate vertices for a dynamic effect
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(frame + i) * 0.1;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle window resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full z-1 opacity-60" />;
}
