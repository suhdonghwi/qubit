import { animated, useSpring } from "@react-spring/three";

export default function FloatingElectron() {
  const electronSpring = useSpring<{ position: any }>({
    from: { position: [0, -0.3, 0] },
    to: async (next) => {
      while (1) {
        await next({ position: [0, -0.7, 0] });
        await next({ position: [0, -0.2, 0] });
      }
    },
  });

  return (
    <animated.mesh castShadow {...electronSpring}>
      <sphereBufferGeometry args={[0.4, 64, 64]} />
      <meshLambertMaterial color="#228be6" />
    </animated.mesh>
  );
}
