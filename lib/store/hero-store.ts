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
  line1: "Olá, eu sou Bruno",
  line2: "Desenvolvedor Full-Stack",
  line3: "Transformando ideias em realidade",
}));
