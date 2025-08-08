import { create } from "zustand";
import { Product } from "@/types/product";

interface UIState {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  productModal: {
    open: boolean;
    product: Product | null;
  };
  openProductModal: (product: Product) => void;
  closeProductModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
  productModal: {
    open: false,
    product: null,
  },
  openProductModal: (product: Product) =>
    set({ productModal: { open: true, product } }),
  closeProductModal: () =>
    set({ productModal: { open: false, product: null } }),
}));
