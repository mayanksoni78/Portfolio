'use client';
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null!);
  const sphere1Ref = useRef<THREE.Mesh>(null!);
  const sphere2Ref = useRef<THREE.Mesh>(null!);
  const sphere3Ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t / 4) * 0.2;
      groupRef.current.rotation.x = Math.sin(t / 3) * 0.1;
    }

    if (sphere1Ref.current) {
      sphere1Ref.current.position.y = Math.sin(t / 1.5) * 0.5 + 1;
      sphere1Ref.current.position.x = Math.cos(t / 2) * 0.5 - 2;
    }
    
    if (sphere2Ref.current) {
      sphere2Ref.current.position.y = Math.sin(t / 2 + 1) * 0.8 - 1;
      sphere2Ref.current.position.x = Math.cos(t / 1.5 + 1) * 0.5 + 2;
    }
    
    if (sphere3Ref.current) {
      sphere3Ref.current.position.y = Math.sin(t / 1.2 + 2) * 0.6;
      sphere3Ref.current.position.x = Math.sin(t / 1.8 + 2) * 0.6;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Primary elegant glowing orb */}
      <Sphere ref={sphere1Ref} args={[1, 64, 64]} position={[-2, 1, -3]} scale={1.2}>
        <MeshDistortMaterial 
          color="#06b6d4" 
          attach="material" 
          distort={0.4} 
          speed={1.5} 
          roughness={0.2} 
          metalness={0.8} 
          transparent
          opacity={0.7}
        />
      </Sphere>

      {/* Secondary accent orb */}
      <Sphere ref={sphere2Ref} args={[1, 64, 64]} position={[2, -1, -4]} scale={1.5}>
        <MeshDistortMaterial 
          color="#0ea5e9" 
          attach="material" 
          distort={0.5} 
          speed={2} 
          roughness={0.1} 
          metalness={0.5} 
          transparent
          opacity={0.5}
        />
      </Sphere>

      {/* Background soft orb */}
      <Sphere ref={sphere3Ref} args={[1, 64, 64]} position={[0, 0, -6]} scale={2}>
        <MeshDistortMaterial 
          color="#67e8f9" 
          attach="material" 
          distort={0.3} 
          speed={1} 
          roughness={0.5} 
          metalness={0.2} 
          transparent
          opacity={0.3}
        />
      </Sphere>
      
      {/* Point lights to add glow */}
      <pointLight position={[-2, 1, -1]} color="#06b6d4" intensity={2} distance={5} />
      <pointLight position={[2, -1, -2]} color="#0ea5e9" intensity={1.5} distance={5} />
    </group>
  );
}
