import { useState } from "react";

import { animated, useSpring } from "@react-spring/three";

interface ButtonProps {
  onClick?(): void;
  onDown?(): void;
  onUp?(): void;

  position?: [number, number, number];
}

export default function Button({
  onClick,
  onDown,
  onUp,
  position,
}: ButtonProps) {
  const [pushed, setPushed] = useState(false);

  function onOver() {
    document.documentElement.style.cursor = "pointer";
  }

  function onOut() {
    document.documentElement.style.cursor = "default";
    onUpInternal();
  }

  function onDownInternal() {
    setPushed(true);

    onDown && onDown();
  }

  function onUpInternal() {
    setPushed(false);

    onUp && onUp();
  }

  const buttonProps = useSpring({
    position: (pushed ? [0, 0.1, 0] : [0, 0.25, 0]) as any,
  });

  return (
    <group position={position}>
      <mesh castShadow>
        <cylinderBufferGeometry args={[0.5, 0.5, 0.2, 32]} />
        <meshLambertMaterial color="#adb5bd" />
      </mesh>

      <animated.mesh
        onPointerDown={onDownInternal}
        onPointerUp={onUpInternal}
        onPointerOver={onOver}
        onPointerOut={onOut}
        onClick={onClick}
        {...buttonProps}
      >
        <cylinderBufferGeometry args={[0.4, 0.4, 0.3, 32]} />
        <meshLambertMaterial color="#ff6b6b" />
      </animated.mesh>
    </group>
  );
}
