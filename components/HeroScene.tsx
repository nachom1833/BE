"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Mesh, Shape, ExtrudeGeometry, Group, MathUtils } from "three";
import { useTheme } from "next-themes";

const MAX_PARALLAX_ROTATION = MathUtils.degToRad(5);

function createLetterBShape() {
  const shape = new Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0.9, 0);
  shape.lineTo(0.9, 0.5);
  shape.lineTo(1.55, 0.5);
  shape.lineTo(1.55, 1.55);
  shape.lineTo(0.9, 1.55);
  shape.lineTo(0.9, 2.05);
  shape.lineTo(1.6, 2.05);
  shape.lineTo(1.6, 3.1);
  shape.lineTo(0, 3.1);
  shape.closePath();

  const topHole = new Shape();
  topHole.moveTo(0.45, 2.35);
  topHole.lineTo(1.13, 2.35);
  topHole.lineTo(1.13, 2.78);
  topHole.lineTo(0.45, 2.78);
  topHole.closePath();

  const bottomHole = new Shape();
  bottomHole.moveTo(0.45, 0.8);
  bottomHole.lineTo(1.08, 0.8);
  bottomHole.lineTo(1.08, 1.24);
  bottomHole.lineTo(0.45, 1.24);
  bottomHole.closePath();

  shape.holes.push(topHole, bottomHole);

  return shape;
}

function createLetterEShape() {
  const shape = new Shape();
  shape.moveTo(0, 0);
  shape.lineTo(1.7, 0);
  shape.lineTo(1.7, 0.52);
  shape.lineTo(0.62, 0.52);
  shape.lineTo(0.62, 1.3);
  shape.lineTo(1.45, 1.3);
  shape.lineTo(1.45, 1.82);
  shape.lineTo(0.62, 1.82);
  shape.lineTo(0.62, 2.58);
  shape.lineTo(1.72, 2.58);
  shape.lineTo(1.72, 3.1);
  shape.lineTo(0, 3.1);
  shape.closePath();
  return shape;
}

function SceneContent({ color }: { color: string }) {
  const planeRef = useRef<Mesh>(null);
  const textGroupRef = useRef<Group>(null);
  const isVisibleRef = useRef(true);

  const extrudeConfig = useMemo(
    () => ({
      depth: 0.24,
      bevelEnabled: false,
      steps: 1,
      curveSegments: 5
    }),
    []
  );

  const bGeometry = useMemo(() => new ExtrudeGeometry(createLetterBShape(), extrudeConfig), [extrudeConfig]);
  const eGeometry = useMemo(() => new ExtrudeGeometry(createLetterEShape(), extrudeConfig), [extrudeConfig]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden;
    };

    handleVisibilityChange();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      bGeometry.dispose();
      eGeometry.dispose();
    };
  }, [bGeometry, eGeometry]);

  useFrame((state) => {
    if (!isVisibleRef.current) {
      return;
    }

    const elapsed = state.clock.getElapsedTime();

    if (planeRef.current) {
      planeRef.current.position.y = Math.sin(elapsed * 0.35) * 0.15;
    }

    if (textGroupRef.current) {
      textGroupRef.current.position.y = 0.55 + Math.sin(elapsed * 0.45) * 0.05;
      const targetX = MathUtils.clamp(-state.mouse.y * MAX_PARALLAX_ROTATION, -MAX_PARALLAX_ROTATION, MAX_PARALLAX_ROTATION);
      const targetY = MathUtils.clamp(state.mouse.x * MAX_PARALLAX_ROTATION, -MAX_PARALLAX_ROTATION, MAX_PARALLAX_ROTATION);
      textGroupRef.current.rotation.x = MathUtils.lerp(textGroupRef.current.rotation.x, targetX, 0.06);
      textGroupRef.current.rotation.y = MathUtils.lerp(textGroupRef.current.rotation.y, targetY, 0.06);
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1.2, 6.4]} fov={40} />
      <ambientLight intensity={0.4} />
      <directionalLight intensity={0.65} position={[3, 4, 5]} />

      <mesh ref={planeRef} rotation={[-MathUtils.degToRad(17), 0, 0]} position={[0, -1.45, -0.1]}>
        <planeGeometry args={[16, 9, 26, 20]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.32} />
      </mesh>

      <group ref={textGroupRef} position={[-2.05, 0.55, 0.55]} scale={[0.75, 0.75, 0.75]}>
        <mesh geometry={bGeometry}>
          <meshStandardMaterial color={color} roughness={0.9} metalness={0} transparent opacity={0.4} />
        </mesh>
        <mesh geometry={eGeometry} position={[2.05, 0, 0]}>
          <meshStandardMaterial color={color} roughness={0.9} metalness={0} transparent opacity={0.4} />
        </mesh>
      </group>
    </>
  );
}

export default function HeroScene() {
  const { resolvedTheme } = useTheme();
  const [canRender, setCanRender] = useState(true);

  const sceneColor = resolvedTheme === "dark" ? "#93c5fd" : "#1e3a8a";

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    setCanRender(Boolean(context));
  }, []);

  if (!canRender) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-10">
      <Canvas aria-hidden="true" style={{ pointerEvents: "none" }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <SceneContent color={sceneColor} />
        </Suspense>
      </Canvas>
    </div>
  );
}
