import Link from "next/link";
import styles from "@/styles/Footer.module.css";

import React from "react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; DJ Event 2022</p>
      <p>
        <Link href="/about">About This Project</Link>
      </p>
    </footer>
  );
}
