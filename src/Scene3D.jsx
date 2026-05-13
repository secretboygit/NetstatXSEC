import { Canvas } from "@react-three/fiber";
import { Stars, useGLTF } from "@react-three/drei";

function GirlModel() {
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}girl.glb`);

  return (
    <primitive
      object={scene}
      scale={3}
      position={[0, -2, 0]}
      rotation={[0, 0.4, 0]}
    />
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={3} />
      <pointLight position={[-5, 3, 5]} intensity={2} color="#00ff73" />

      <Stars radius={100} depth={60} count={1800} factor={4} fade />

      <GirlModel />
    </Canvas>
  );
}

useGLTF.preload(`${import.meta.env.BASE_URL}girl.glb`);