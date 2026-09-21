import { OrthographicCamera } from "@react-three/drei";
import { Suspense, type ReactNode } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { SpringContext } from "@react-spring/three";
import { useInView } from "react-intersection-observer";
import { useMediaQuery, usePageVisible } from "../../utils/useMediaQuery";
import GraphicsBoundary from "./GraphicsBoundary";
import { SceneRunning } from "./SceneRuntime";

function Camera() {
  const { width, height } = useThree((state) => state.size);
  const zoom = Math.max(12, Math.min(width / 14, height / 12, 55));
  return (
    <OrthographicCamera
      position={[0, 3.5, 10]}
      rotation={[-Math.PI / 8, 0, 0]}
      zoom={zoom}
      makeDefault
    />
  );
}

export default function World3D({ children }: { children: ReactNode }) {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const smallScreen = useMediaQuery("(max-width: 700px)");
  const visible = usePageVisible();
  const { ref, inView } = useInView();
  const running = !reducedMotion && visible && inView;

  return (
    <div ref={ref} className="world3d">
      <GraphicsBoundary>
        <Canvas
          shadows={!smallScreen}
          dpr={smallScreen ? 1 : [1, 1.75]}
          frameloop={running ? "always" : "demand"}
          gl={{ antialias: true, powerPreference: "default" }}
          fallback={null}
        >
          <SpringContext
            value={{ pause: !visible || !inView, immediate: reducedMotion }}
          >
            <Camera />
            <Suspense fallback={null}>
              <SceneRunning value={running}>{children}</SceneRunning>
            </Suspense>
          </SpringContext>
        </Canvas>
      </GraphicsBoundary>
    </div>
  );
}
