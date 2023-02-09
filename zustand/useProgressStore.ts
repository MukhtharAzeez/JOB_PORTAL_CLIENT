import { create } from "zustand";

interface State {
  isAnimating: boolean;
  setIsAnimating: any;
}

export const useProgressStore = create<State>((set) => ({
    isAnimating : false,
    setIsAnimating: (isAnimating:boolean)=>set(()=>({isAnimating}))
}));
