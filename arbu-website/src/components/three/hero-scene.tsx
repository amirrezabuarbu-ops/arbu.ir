"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

/** Shared pointer state (normalized -1..1) fed by a window listener */
const pointer = { x: 0, y: 0 };

function usePointerTracking() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
}

/** Camera + group rig that eases toward the pointer */
function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, pointer.x * 0.35, 2.2, delta);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, -pointer.y * 0.22, 2.2, delta);
    g.position.x = THREE.MathUtils.damp(g.position.x, pointer.x * 0.4, 2.0, delta);
    g.position.y = THREE.MathUtils.damp(g.position.y, pointer.y * 0.25, 2.0, delta);
    state.camera.lookAt(0, 0, 0);
  });
  return <group ref={group}>{children}</group>;
}

function ElectricBlob({ low }: { low: boolean }) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.z += delta * 0.15;
  });
  const seg = low ? 40 : 88;
  return (
    <Float speed={1.6} rotationIntensity={0.55} floatIntensity={1.15}>
      <mesh ref={mesh} position={[0.2, 0.1, 0]} scale={1.55}>
        <sphereGeometry args={[1, seg, seg]} />
        <MeshDistortMaterial
          color="#7200ff"
          distort={0.42}
          speed={1.6}
          roughness={0.12}
          metalness={0.55}
          emissive="#3b0a80"
          emissiveIntensity={0.35}
        />
      </mesh>
    </Float>
  );
}

function WhiteRing() {
  return (
    <Float speed={1.2} rotationIntensity={0.9} floatIntensity={0.9}>
      <mesh position={[1.9, 1.15, -0.6]} rotation={[Math.PI / 2.4, 0.4, 0]}>
        <torusGeometry args={[0.85, 0.2, 20, 72]} />
        <meshStandardMaterial color="#ffffff" roughness={0.15} metalness={0.35} />
      </mesh>
    </Float>
  );
}

function DarkPill() {
  return (
    <Float speed={1.45} rotationIntensity={1.1} floatIntensity={1.05}>
      <mesh position={[-2.15, -1.05, -0.4]} rotation={[0.5, 0.2, 0.7]}>
        <capsuleGeometry args={[0.34, 0.95, 8, 24]} />
        <meshStandardMaterial color="#111111" roughness={0.25} metalness={0.45} />
      </mesh>
    </Float>
  );
}

function WireIco() {
  return (
    <Float speed={2.1} rotationIntensity={1.4} floatIntensity={1.3}>
      <mesh position={[2.05, -1.25, 0.4]} rotation={[0.3, 0.5, 0.2]}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial color="#a855f7" wireframe roughness={0.3} metalness={0.2} />
      </mesh>
    </Float>
  );
}

function OrbCluster({ low }: { low: boolean }) {
  const seg = low ? 24 : 48;
  return (
    <>
      <Float speed={1.9} rotationIntensity={0.4} floatIntensity={1.4}>
        <mesh position={[-1.7, 1.35, 0.5]}>
          <sphereGeometry args={[0.22, seg, seg]} />
          <meshStandardMaterial color="#a855f7" roughness={0.1} metalness={0.6} />
        </mesh>
      </Float>
      <Float speed={2.3} rotationIntensity={0.4} floatIntensity={1.6}>
        <mesh position={[1.25, -0.55, 1.05]}>
          <sphereGeometry args={[0.13, seg, seg]} />
          <meshStandardMaterial color="#ffffff" roughness={0.05} metalness={0.7} />
        </mesh>
      </Float>
      <Float speed={1.7} rotationIntensity={0.4} floatIntensity={1.5}>
        <mesh position={[-0.9, -1.6, 0.9]}>
          <sphereGeometry args={[0.17, seg, seg]} />
          <meshStandardMaterial color="#111111" roughness={0.2} metalness={0.5} />
        </mesh>
      </Float>
    </>
  );
}

export default function HeroScene() {
  usePointerTracking();
  const low = typeof window !== "undefined" && window.innerWidth < 640;
  return (
    <div className="absolute inset-0" aria-hidden>
      <Canvas
        dpr={[1, low ? 1.35 : 1.8]}
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        gl={{ antialias: !low, alpha: true, powerPreference: "high-performance" }}
        style={{ pointerEvents: "none", background: "transparent" }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[4, 6, 5]} intensity={2.2} />
        <pointLight position={[-5, 3, 3]} intensity={55} distance={14} color="#7200ff" />
        <pointLight position={[5, -3, 2]} intensity={40} distance={12} color="#a855f7" />
        <pointLight position={[0, 4, -4]} intensity={25} distance={12} color="#ffffff" />
        <Rig>
          <ElectricBlob low={low} />
          <WhiteRing />
          <DarkPill />
          <WireIco />
          <OrbCluster low={low} />
          <Sparkles count={low ? 30 : 70} scale={[9, 6, 4]} size={2.4} speed={0.45} color="#a855f7" opacity={0.75} />
          {!low && (
            <Sparkles count={40} scale={[8, 5, 3]} size={1.6} speed={0.3} color="#ffffff" opacity={0.6} />
          )}
        </Rig>
      </Canvas>
    </div>
  );
}
