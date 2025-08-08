"use client";

import Link from "next/link";
import { useAuthStore } from "@/store/auth";
import { useRouter } from "next/navigation";
import styles from "./Header.module.scss";

export default function Header() {
  const { isAuthenticated, user, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.logo}>
          <Link href="/">DummyStore</Link>
        </h1>
        {!isAuthenticated ? (
          <Link href="/login">Login</Link>
        ) : (
          <div className={styles.userBlock}>
            <span className={styles.userIcon}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="6.5" r="4.5" fill="currentColor" />
                <ellipse
                  cx="10"
                  cy="15.5"
                  rx="7"
                  ry="3.5"
                  fill="currentColor"
                  fillOpacity="0.3"
                />
              </svg>
            </span>
            <span>
              {user?.firstName} {user?.lastName}
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
      <nav className={styles.navSection}>
        <div className={styles.navLinks}>
          <span className={styles.navLink}>Home</span>
          <span className={styles.navLink}>Products</span>
          <span className={styles.navLink}>Categories</span>
          <span className={styles.navLink}>About</span>
          <span className={styles.navLink}>Contact</span>
        </div>
      </nav>
    </header>
  );
}
