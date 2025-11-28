import { create } from "zustand";

interface HeroState {
  mounted: boolean;
  setMounted: (mounted: boolean) => void;
  line1: string;
  line2: string;
  line3: string;
}

export const useHeroStore = create<HeroState>((set) => ({
  mounted: false,
  setMounted: (mounted) => set({ mounted }),
  line1: "",
  line2: "",
  line3: "",
}));
