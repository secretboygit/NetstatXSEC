import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Stars, useGLTF } from "@react-three/drei";

function GirlModel() {
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}girl.glb`);

  return (
    <Float speed={1.5} rotationIntensity={0.25} floatIntensity={1.1}>
      <primitive object={scene} scale={1.8} position={[2.4, -1.7, -1]} />
    </Float>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      style={{ position: "fixed", top: 0, left: 0, zIndex: 0 }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 5, 5]} intensity={2.2} />
      <pointLight position={[-4, 2, 3]} intensity={1.3} color="#25b103" />

      <Stars radius={90} depth={50} count={1800} factor={4} fade />

      <GirlModel />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
    </Canvas>
  );
}

useGLTF.preload(`${import.meta.env.BASE_URL}girl.glb`);