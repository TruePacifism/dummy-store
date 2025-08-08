"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth";
import axios from "@/lib/axios";
import styles from "./LoginForm.module.scss";
import type { LoginRequest, LoginResponse } from "@/types/auth";

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const [form, setForm] = useState<LoginRequest>({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    return form.username.trim().length >= 3 && form.password.trim().length >= 3;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setError("Fields must be at least 3 characters long.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post<LoginResponse>("/auth/login", form);
      login(response.data);
      router.push("/");
    } catch (err) {
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
