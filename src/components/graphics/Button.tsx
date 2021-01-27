import { animated, useSpring } from "@react-spring/three";

interface ButtonProps {
  onClick?(): void;
  onDown?(): void;
  onUp?(): void;
  click: boolean;

  position?: [number, number, number];
}

export default function Button({
  onClick,
  onDown,
  onUp,
  position,
  click,
}: ButtonProps) {
  function onOver() {
    document.documentElement.style.cursor = "pointer";
  }

  function onOut() {
    document.documentElement.style.cursor = "default";
    onUp && onUp();
  }

  const buttonProps = useSpring({
    config: {
      tension: 230,
    },
    position: (click ? [0, 0.1, 0] : [0, 0.25, 0]) as any,
  });

  return (
    <group position={position}>
      <mesh castShadow>
        <cylinderBufferGeometry args={[0.5, 0.5, 0.2, 32]} />
        <meshLambertMaterial color="#adb5bd" />
      </mesh>

      <animated.mesh
        onPointerDown={onDown}
        onPointerUp={onUp}
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
