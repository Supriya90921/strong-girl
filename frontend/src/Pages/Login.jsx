import { useState } from "react";
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2 className={styles.title}>Welcome Back 💪</h2>
        <p className={styles.subtitle}>Login to continue your journey</p>

        <input
          className={styles.input}
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className={styles.input}
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className={styles.button}>Login</button>

        <p className={styles.footerText}>
          Don’t have an account?{" "}
          <span className={styles.link} onClick={() => (window.location.href = "/register")}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;