"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./page.module.css";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className={styles.loader}>Loading...</div>;
  }

  if (session) {
    return (
      <main className={styles.container}>
        <div className={styles.card}>
          <h1>Welcome</h1>
          <p className={styles.email}>{session.user.email}</p>
          <button onClick={() => signOut()} className={styles.signOut}>
            Sign Out
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1>Hello</h1>
        <p>Please sign in to continue.</p>
        <button onClick={() => signIn()} className={styles.signIn}>
          Sign In
        </button>
      </div>
    </main>
  );
}
