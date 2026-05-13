import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Stars,
  useGLTF,
} from "@react-three/drei";

function GirlModel() {
  const { scene } = useGLTF(
    `${import.meta.env.BASE_URL}girl.glb`
  );

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={1}
    >
      <primitive
  object={scene}
  scale={3}
  position={[0, -2, 0]}
  rotation={[0, Math.PI / 4, 0]}
/>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
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
      <ambientLight intensity={1.8} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
        color="#ffffff"
      />

      <pointLight
        position={[-5, 3, 5]}
        intensity={2}
        color="#00ff73"
      />

      <Stars
        radius={100}
        depth={60}
        count={2500}
        factor={4}
        fade
        speed={1}
      />

      <GirlModel />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}

useGLTF.preload(
  `${import.meta.env.BASE_URL}girl.glb`
);