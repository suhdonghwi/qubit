import { useContext, useEffect } from "react";
import { positionProps } from "utils/AnimatedVector";
import { useThree, ThreeElements } from "@react-three/fiber";
import { animated, useSpring } from "@react-spring/three";

import { SceneActive } from "./SceneRuntime";

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
}: ButtonProps & ThreeElements["group"]) {
  const active = useContext(SceneActive);
  const canvas = useThree((state) => state.gl.domElement);
  useEffect(() => {
    if (!active) return;
    const previousTabIndex = canvas.getAttribute("tabindex");
    canvas.setAttribute("tabindex", "0");
    canvas.setAttribute("role", "button");
    const labelledBy = canvas
      .closest("section")
      ?.getAttribute("aria-labelledby");
    if (labelledBy) canvas.setAttribute("aria-labelledby", labelledBy);
    const down = (event: KeyboardEvent) => {
      if ((event.key === " " || event.key === "Enter") && !event.repeat) {
        event.preventDefault();
        onDown?.();
      }
    };
    const up = (event: KeyboardEvent) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        onUp?.();
        onClick?.();
      }
    };
    const blur = () => onUp?.();
    canvas.addEventListener("keydown", down);
    canvas.addEventListener("keyup", up);
    canvas.addEventListener("blur", blur);
    return () => {
      canvas.removeEventListener("keydown", down);
      canvas.removeEventListener("keyup", up);
      canvas.removeEventListener("blur", blur);
      if (previousTabIndex === null) canvas.removeAttribute("tabindex");
      else canvas.setAttribute("tabindex", previousTabIndex);
      canvas.removeAttribute("role");
      canvas.removeAttribute("aria-labelledby");
      document.documentElement.style.cursor = "default";
    };
  }, [active, canvas, onClick, onDown, onUp]);
  useEffect(() => {
    if (!active) return;
    canvas.setAttribute("aria-pressed", String(click));
    return () => canvas.removeAttribute("aria-pressed");
  }, [active, canvas, click]);

  function onOver() {
    document.documentElement.style.cursor = "pointer";
  }

  function onOut() {
    document.documentElement.style.cursor = "default";
    onUp?.();
  }

  const buttonSpring = useSpring<{ position: [number, number, number] }>({
    config: {
      tension: 230,
    },
    position: click ? [0, 0.1, 0] : [0, 0.25, 0],
  });

  return (
    <group {...props}>
      <mesh castShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} />
        <meshLambertMaterial color="#adb5bd" />
      </mesh>

      <animated.mesh
        onPointerDown={onDown}
        onPointerUp={onUp}
        onPointerOver={onOver}
        onPointerOut={onOut}
        onClick={onClick}
        {...positionProps(buttonSpring.position)}
      >
        <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
        <meshLambertMaterial color="#ff6b6b" />
      </animated.mesh>
    </group>
  );
}
