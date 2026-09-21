import { SceneRunning } from "./SceneRuntime";
import { OrthographicCamera, Html } from "@react-three/drei";
import { Suspense, useState, type ReactNode } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { SpringContext } from "@react-spring/three";
import { useInView } from "react-intersection-observer";
import { useMediaQuery, usePageVisible } from "../../utils/useMediaQuery";
import GraphicsBoundary from "./GraphicsBoundary";

function Camera() {
  const { width, height } = useThree((state) => state.size);
  const zoom = Math.max(12, Math.min(width / 14, height / 12, 55));
  return <OrthographicCamera position={[0, 3.5, 10]} rotation={[-Math.PI / 8, 0, 0]} zoom={zoom} makeDefault />;
}

export default function World3D({ children }: { children: ReactNode }) {
  const [manualPause, setManualPause] = useState<boolean | null>(null);
  const [quality, setQuality] = useState("auto");
  const [revision, setRevision] = useState(0);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const smallScreen = useMediaQuery("(max-width: 700px)");
  const visible = usePageVisible();
  const { ref, inView } = useInView();
  const paused = manualPause ?? reducedMotion;
  const low = quality === "low" || (quality === "auto" && smallScreen);
  const running = !paused && visible && inView;

  return (
    <div ref={ref} className="world3d" aria-label="대화형 양자 실험">
      <div className="graphics-toolbar">
        <button type="button" aria-pressed={paused} onClick={() => setManualPause(!paused)}>
          {paused ? "재생" : "일시 정지"}
        </button>
        <button type="button" onClick={() => setRevision((value) => value + 1)}>실험 초기화</button>
        <label>
          화질
          <select value={quality} onChange={(event) => setQuality(event.target.value)}>
            <option value="auto">자동</option>
            <option value="low">절전</option>
            <option value="high">높음</option>
          </select>
        </label>
      </div>
      <GraphicsBoundary>
        <Canvas shadows={!low} dpr={low ? 1 : [1, 1.75]} frameloop={running ? "always" : "demand"}
          gl={{ antialias: true, powerPreference: "default" }}
          fallback={<p className="graphics-message">이 기기에서는 3D를 표시할 수 없습니다. 설명은 계속 읽을 수 있습니다.</p>}>
          <SpringContext value={{ pause: !running, immediate: reducedMotion }}>
            <Camera />
            <Suspense fallback={<Html center><p className="loading-label" role="status">3D 불러오는 중…</p></Html>}>
              <SceneRunning value={running}><group key={revision}>{children}</group></SceneRunning>
            </Suspense>
          </SpringContext>
        </Canvas>
      </GraphicsBoundary>
      <p className="graphics-hint">장면을 다시 방문하면 실험이 초기화됩니다.</p>
    </div>
  );
}
