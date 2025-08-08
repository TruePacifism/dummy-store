import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LoginResponse } from "@/types/auth";

interface AuthState {
  user: LoginResponse | null;
  isAuthenticated: boolean;
  login: (user: LoginResponse) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false, token: null }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
