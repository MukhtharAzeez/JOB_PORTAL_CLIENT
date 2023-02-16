import { create } from "zustand";

interface State {
  id: string;
  setId: any;
}

export const allUsersIdsStore = create<State>((set) => ({
  id: null,
  setId: (id: string) => set(() => ({ id })),
}));
