import { create } from "zustand";

interface HeroState {
  mounted: boolean;
  setMounted: (mounted: boolean) => void;
}

export const useHeroStore = create<HeroState>((set) => ({
  mounted: false,
  setMounted: (mounted) => set({ mounted }),
}));
