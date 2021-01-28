import { Suspense } from "react";

import { useGLTF, Text } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import Plane from "../Plane";

function Kitty() {
  const kitty = useGLTF("/models/kitty.gltf");
  kitty.scene.traverse((child) => {
    child.castShadow = true;
  });

  return (
    <primitive
      castShadow
      object={kitty.scene}
      dispose={null}
      scale={[4, 4, 4]}
    />
  );
}

export default function CatBoxGraphic() {
  const opacityProps = useSpring({
    from: { opacity: 0.3 },
    to: async (next) => {
      while (1) {
        await next({ opacity: 0.9 });
        await next({ opacity: 0.3 });
      }
    },
  });

  return (
    <>
      <Suspense fallback={null}>
        <Kitty />
      </Suspense>

      <mesh position={[0, 0.1, 0]}>
        <boxBufferGeometry args={[2.2, 2.2, 2.2]} />
        <animated.meshLambertMaterial
          color="#ced4da"
          transparent
          {...opacityProps}
        />
      </mesh>
      <Text
        color="white"
        fontSize={1}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        position={[1, 2, -3]}
      >
        Dead?
      </Text>
      <Text
        color="white"
        fontSize={1}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        position={[2.7, 2, -0.5]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        Alive?
      </Text>

      <Plane />
    </>
  );
}
