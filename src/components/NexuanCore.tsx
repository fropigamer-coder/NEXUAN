"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NexuanCore() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    const size = Math.min(window.innerWidth * 0.4, 400);
    renderer.setSize(size, size);
    containerRef.current.appendChild(renderer.domElement);

    // Geometría: Icosaedro para un look tech/geométrico
    const geometry = new THREE.IcosahedronGeometry(1.5, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0x0190e1,
      wireframe: true,
      emissive: 0x0190e1,
      emissiveIntensity: 0.5,
    });
    
    const core = new THREE.Mesh(geometry, material);
    scene.add(core);

    // Luz
    const light = new THREE.PointLight(0x0190e1, 10);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 0.2));

    camera.position.z = 4;

    const animate = () => {
      requestAnimationFrame(animate);
      core.rotation.x += 0.005;
      core.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="relative z-10" />;
}
