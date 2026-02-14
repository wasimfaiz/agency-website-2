"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

interface HeroOrbProps {
  scrollYProgress?: MotionValue<number>;
}

export default function HeroOrb({ scrollYProgress }: HeroOrbProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hostRef.current) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    hostRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1.6, 48, 48);

    // Start with Black & White (Gray)
    const startColor = new THREE.Color(0x444444);

    // Random Vibrant Color on Refresh
    const colors = [
      0x3b82f6, // Blue
      0xa855f7, // Purple
      0xec4899, // Pink
      0x06b6d4, // Cyan
      0x22c55e, // Green
      0xf97316, // Orange
      0xef4444, // Red
      0xeab308, // Yellow
    ];
    const randomHex = colors[Math.floor(Math.random() * colors.length)];
    const endColor = new THREE.Color(randomHex);

    const material = new THREE.MeshBasicMaterial({
      color: startColor,
      wireframe: true,
    });
    const orb = new THREE.Mesh(geometry, material);
    scene.add(orb);

    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);

    let frameId = 0;
    const render = () => {
      // Rotation
      if (!prefersReduced) {
        orb.rotation.y += 0.0025;
        orb.rotation.x += 0.001;
      }

      // Color Transition based on Scroll
      if (scrollYProgress) {
        const progress = scrollYProgress.get() || 0;

        const color1 = startColor;
        const color2 = endColor;

        // Smooth transition from Gray (Start) to Random Vibrant (End)
        material.color.lerpColors(color1, color2, progress);
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      if (!hostRef.current) return;
      const { width, height } = hostRef.current.getBoundingClientRect();
      renderer.setSize(width, height);
      camera.aspect = width / height || 1;
      camera.updateProjectionMatrix();
    };

    handleResize();
    frameId = requestAnimationFrame(render);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [scrollYProgress]);

  return <div ref={hostRef} className="h-full w-full" aria-hidden="true" />;
}
