"use client";

/* Core */
import Link from "next/link";
import { usePathname } from "next/navigation";

/* Instruments */
import styles from "../styles/layout.module.css";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/home"
      >
        Home
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/twitter" ? styles.active : ""
        }`}
        href="/twitter"
      >
        Twitter
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/books" ? styles.active : ""
        }`}
        href="/books"
      >
        Books
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/skills" ? styles.active : ""
        }`}
        href="/skills"
      >
        Skills
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/about" ? styles.active : ""
        }`}
        href="/about"
      >
        About
      </Link>
    </nav>
  );
};
