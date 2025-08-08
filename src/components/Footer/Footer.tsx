"use client";

import { useAuthStore } from "@/store/auth";
import styles from "./Footer.module.scss";

export default function Footer() {
  const { isAuthenticated, user } = useAuthStore();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerRow}>
        <span className={styles.footerIcon}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              stroke="currentColor"
              strokeWidth="2"
              fill="#fff"
            />
            <path
              d="M6 10.5C6 8.567 7.567 7 9.5 7C11.433 7 13 8.567 13 10.5C13 12.433 11.433 14 9.5 14C7.567 14 6 12.433 6 10.5Z"
              fill="#3f51b5"
              fillOpacity="0.3"
            />
            <circle cx="9.5" cy="10.5" r="2.5" fill="#3f51b5" />
          </svg>
        </span>
        <span>{year} DummyStore</span>
        {isAuthenticated && user?.email && (
          <span className={styles.footerUser} title={user.email}>
            Logged as {user.email}
          </span>
        )}
      </div>
      <div className={styles.socials}>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener"
          title="GitHub"
          className={styles.socialLink}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.174 22 16.426 22 12.012 22 6.484 17.523 2 12 2z"
              fill="#24292f"
            />
          </svg>
        </a>
        <a
          href="https://t.me/"
          target="_blank"
          rel="noopener"
          title="Telegram"
          className={styles.socialLink}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm4.93 7.31l-1.43 6.77c-.11.49-.4.61-.81.38l-2.25-1.66-1.09 1.05c-.12.12-.23.23-.47.23l.17-2.39 4.36-3.94c.19-.17-.04-.27-.29-.1l-5.39 3.39-2.32-.73c-.5-.16-.51-.5.1-.73l9.02-3.48c.41-.15.77.1.64.72z"
              fill="#229ED9"
            />
          </svg>
        </a>
        <a
          href="https://youtube.com/"
          target="_blank"
          rel="noopener"
          title="YouTube"
          className={styles.socialLink}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M23.498 6.186a2.994 2.994 0 0 0-2.11-2.115C19.413 3.5 12 3.5 12 3.5s-7.413 0-9.388.571A2.994 2.994 0 0 0 .502 6.186C0 8.162 0 12 0 12s0 3.838.502 5.814a2.994 2.994 0 0 0 2.11 2.115C4.587 20.5 12 20.5 12 20.5s7.413 0 9.388-.571a2.994 2.994 0 0 0 2.11-2.115C24 15.838 24 12 24 12s0-3.838-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
              fill="#FF0000"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}
