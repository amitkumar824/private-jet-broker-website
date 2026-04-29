import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  
  // Create random points in a sphere-like distribution
  const sphere = useMemo(() => {
    const points = new Float32Array(3000);
    for (let i = 0; i < 3000; i++) {
        // Randomly place points in a 10x10x10 space
      points[i] = (Math.random() - 0.5) * 10;
    }
    return points;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#D4AF37"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.3}
        />
      </Points>
    </group>
  );
}

export default function Atmosphere() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000">
      <Canvas camera={{ position: [0, 0, 1] }} alpha={true}>
        <ParticleField />
      </Canvas>
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.8)_100%)] opacity-80" />
    </div>
  );
}
