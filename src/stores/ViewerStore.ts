import create from "zustand";

type Store = {
  sceneIndex: number;
  paragraphIndex: number;
  setIndex(sIndex: number, pIndex: number): void;
};

const useViewerStore = create<Store>((set) => ({
  sceneIndex: 0,
  paragraphIndex: 0,
  setIndex: (sceneIndex: number, paragraphIndex: number) =>
    set((_) => ({ sceneIndex, paragraphIndex })),
}));

export default useViewerStore;
