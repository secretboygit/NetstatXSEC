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
      rotationIntensity={0.15}
      floatIntensity={0.8}
    >
      <primitive
        object={scene}
        scale={1.9}
        position={[0.8, -3, -2]}
        rotation={[0, 0, 0]}
      />
    </Float>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
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
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
        color="#00ff73"
      />

      <Stars
        radius={100}
        depth={60}
        count={1200}
        factor={2.5}
        saturation={0}
        fade
        speed={1}
      />

      <GirlModel />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
      />
    </Canvas>
  );
}

useGLTF.preload(
  `${import.meta.env.BASE_URL}girl.glb`
);