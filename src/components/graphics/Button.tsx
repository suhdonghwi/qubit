import { GroupProps } from "react-three-fiber";
import { animated, useSpring } from "@react-spring/three";

interface ButtonProps {
  onClick?(): void;
  onDown?(): void;
  onUp?(): void;
  click: boolean;
}

export default function Button({
  onClick,
  onDown,
  onUp,
  click,
  ...props
}: ButtonProps & GroupProps) {
  function onOver() {
    document.documentElement.style.cursor = "pointer";
  }

  function onOut() {
    document.documentElement.style.cursor = "default";
    onUp && onUp();
  }

  const buttonSpring = useSpring<{ position: any }>({
    config: {
      tension: 230,
    },
    position: click ? [0, 0.1, 0] : [0, 0.25, 0],
  });

  return (
    <group {...props}>
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
        {...buttonSpring}
      >
        <cylinderBufferGeometry args={[0.4, 0.4, 0.3, 32]} />
        <meshLambertMaterial color="#ff6b6b" />
      </animated.mesh>
    </group>
  );
}
