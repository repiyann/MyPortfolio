import { create } from "zustand";

interface AccordionState {
  openAccordion: string[] | undefined;
  setOpenAccordion: (value: string[] | undefined) => void;
}

export const useAccordionStore = create<AccordionState>((set) => ({
  openAccordion: undefined,
  setOpenAccordion: (value) => set({ openAccordion: value }),
}));
