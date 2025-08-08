import { create } from "zustand";

interface UIState {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  productModal: {
    open: boolean;
    product: any | null;
  };
  openProductModal: (product: any) => void;
  closeProductModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
  productModal: {
    open: false,
    product: null,
  },
  openProductModal: (product) => set({ productModal: { open: true, product } }),
  closeProductModal: () =>
    set({ productModal: { open: false, product: null } }),
}));
