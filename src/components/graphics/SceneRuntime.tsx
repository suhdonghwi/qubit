import { createContext, useContext } from "react";
import { useFrame, type RenderCallback } from "@react-three/fiber";

export const SceneActive = createContext(true);
export const SceneRunning = createContext(true);

export function useSceneRunning() {
  return useContext(SceneRunning);
}

export function useSceneFrame(callback: RenderCallback) {
  const running = useSceneRunning();
  useFrame((state, delta, frame) => {
    callback(state, running ? Math.min(delta, 0.05) : 0, frame);
  });
}
