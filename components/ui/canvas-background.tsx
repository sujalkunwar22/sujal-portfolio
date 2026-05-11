"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useScroll, useTransform } from "framer-motion";

function Particles({ count = 5000, scrollYProgress }: { count?: number; scrollYProgress: any }) {
  const [points, setPoints] = React.useState<Float32Array | null>(null);

  React.useEffect(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    setPoints(p);
  }, [count]);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      const scroll = scrollYProgress.get();
      const targetRotationY = state.clock.getElapsedTime() * 0.05 + scroll * 4;
      const targetRotationX = state.clock.getElapsedTime() * 0.03 + scroll * 2;
      
      // Dampened rotation for smoothness
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetRotationY, 0.1);
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, targetRotationX, 0.1);
    }
  });

  if (!points) return null;

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#bc13fe"
        size={0.012}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function CentralObject({ scrollYProgress }: { scrollYProgress: any }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const scroll = scrollYProgress.get();
      const targetRotX = state.clock.getElapsedTime() * 0.2 + scroll * 8;
      const targetRotY = state.clock.getElapsedTime() * 0.3 + scroll * 6;
      const targetScale = 1 + scroll * 0.8;

      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, 0.05);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.05);
      const s = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.05);
      meshRef.current.scale.setScalar(s);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 20]} />
        <MeshDistortMaterial
          color="#00f2ff"
          speed={3}
          distort={0.4}
          radius={1}
          emissive="#bc13fe"
          emissiveIntensity={0.3}
          roughness={0}
          metalness={1}
        />
      </mesh>
    </Float>
  );
}

export function CanvasBackground() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed inset-0 -z-10 bg-[#050505] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#bc13fe" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#00f2ff" />
        <Particles scrollYProgress={scrollYProgress} />
        <CentralObject scrollYProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
}

