import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Stars, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function GirlModel({ isMobile }) {
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}girl.glb`);

  const model = useMemo(() => scene.clone(true), [scene]);

  return (
    <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.55}>
      <primitive
        object={model}
        scale={isMobile ? 1.35 : 2.2}
        position={isMobile ? [0, -2.2, -2.2] : [0.8, -3, -2]}
        rotation={[0, 0, 0]}
      />
    </Float>
  );
}

function LoadingFallback() {
  return null;
}

export default function Scene3D() {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <Canvas
      camera={{
        position: isMobile ? [0, 0, 6] : [0, 0, 5],
        fov: isMobile ? 50 : 45,
      }}
      dpr={isMobile ? [1, 1.3] : [1, 2]}
      gl={{
        antialias: !isMobile,
        alpha: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
      }}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <ambientLight intensity={isMobile ? 1.8 : 1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={isMobile ? 1.6 : 2}
        color="#00ff73"
      />

      <Stars
        radius={100}
        depth={50}
        count={isMobile ? 900 : 3000}
        factor={isMobile ? 3 : 4}
        saturation={0}
        fade
        speed={isMobile ? 0.4 : 1}
      />

      <Suspense fallback={<LoadingFallback />}>
        <GirlModel isMobile={isMobile} />
      </Suspense>

      {!isMobile && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.35}
        />
      )}
    </Canvas>
  );
}

useGLTF.preload(`${import.meta.env.BASE_URL}girl.glb`);