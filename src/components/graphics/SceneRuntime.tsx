import { createContext, useContext, useRef } from "react";
import { useFrame, type RenderCallback } from "@react-three/fiber";

export const SceneRunning = createContext(true);

export function useSceneRunning() {
  return useContext(SceneRunning);
}

export function useSceneFrame(callback: RenderCallback) {
  const running = useSceneRunning();
  const initialized = useRef(false);
  useFrame((state, delta, frame) => {
    if (running || !initialized.current) {
      callback(state, running ? Math.min(delta, 0.05) : 0, frame);
      initialized.current = true;
    }
  });
}
