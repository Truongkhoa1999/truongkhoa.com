import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './style/crtscreen.scss'
const CRTScreen: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const width = isMobile ? 0 :450
const height = isMobile? 0: 250
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Use 0x000000 as the color and 0 for alpha

    const geometry = new THREE.SphereGeometry(10, 30, 30);
    const material = new THREE.MeshBasicMaterial({
      color: "wheat",
      wireframe: true,
      side: THREE.DoubleSide, 
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 15;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
    };
  }, []);

  return <canvas className="container_sphere" ref={canvasRef} />;
};

export default CRTScreen;
