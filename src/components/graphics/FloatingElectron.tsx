import { useSceneRunning } from "components/graphics/SceneRuntime";
import { positionProps } from "utils/AnimatedVector";
import { animated, useSpring } from "@react-spring/three";

export default function FloatingElectron() {
  const running = useSceneRunning();
  const electronSpring = useSpring<{ position: [number, number, number] }>({
    pause: !running,
    from: { position: [0, -0.3, 0] },
    to: async (next) => {
      let active = true;
      while (active) {
        active = !(await next({ position: [0, -0.7, 0] })).cancelled;
        if (!active) return;
        if ((await next({ position: [0, -0.2, 0] })).cancelled) return;
      }
    },
  });

  return (
    <animated.mesh castShadow {...positionProps(electronSpring.position)}>
      <sphereGeometry args={[0.4, 24, 16]} />
      <meshLambertMaterial color="#228be6" />
    </animated.mesh>
  );
}
