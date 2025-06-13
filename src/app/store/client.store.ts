import { create } from 'zustand'

type ClientStore = {
  client: string | null;
  setClient: (client: string | null) => void;
}

export const useClientStore = create<ClientStore>((set) => ({
  client: null,
  setClient: (client) => set({ client }),
}))