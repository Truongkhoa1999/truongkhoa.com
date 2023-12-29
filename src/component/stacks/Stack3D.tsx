import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './style/stack3D.scss'
interface MacBookStackProps {
  className?: string;
}
export const Stack3D: React.FC<MacBookStackProps> = ({className}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
    // renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.BoxGeometry(1.5, 0.1, 1); // Create a basic box for the MacBook representation
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true, wireframeLinewidth: 5 });
    const dashedMaterial = new THREE.LineDashedMaterial({ color: 0x00ff00, dashSize: 0.1, gapSize: 0.05 });
    const dashedLine = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      dashedMaterial
    );
    dashedLine.computeLineDistances();

    const stackHeight = .75;
    for (let i = 0; i < 3; i++) {
      const macBook = new THREE.Mesh(geometry, material);
      macBook.position.y = stackHeight * i;
      scene.add(macBook);

      const dashedLineClone = dashedLine.clone();
      dashedLineClone.position.y = stackHeight * i;
      scene.add(dashedLineClone);
    }

    camera.position.z = 4;

    const animate = () => {
      requestAnimationFrame(animate);

      scene.children.forEach((child, index) => {
        if (index % 2 === 0) {
          child.rotation.x += 0.01; // Rotate only the MacBooks, skipping the dashed lines
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Cleanup code if necessary
    };
  }, []);

  return (
    <div className={`stack3d_container ${className}`}>
      <canvas ref={canvasRef} 
        width={500}
        height={500}
         />
    </div>
  );
};

