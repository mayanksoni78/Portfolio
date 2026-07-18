'use client';
import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import FloatingShapes from './FloatingShapes';

export default function Scene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingShapes />
        <Preload all />
      </Canvas>
    </div>
  );
}
