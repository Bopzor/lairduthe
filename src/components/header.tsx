import Image from "next/image";

import styles from "../assets/css/header.module.css";
import Link from "./link";

type HeaderProps = {
  page: string;
};

export default function Header({ page }: HeaderProps) {
  return (
    <header>
      <div className={styles.headerBackground}>
        <div className={styles.logo}>
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={900}
            height={161}
            style={{
              width: "90%",
              height: "auto",
            }}
          />
        </div>
      </div>

      <nav className={styles.nav}>
        <Link
          href="/presentation"
          active={page === "presentation"}
          style={{ textDecoration: "none" }}
        >
          Présentation
        </Link>
        <Link
          href="/carte-au-poids"
          active={page.includes("carte")}
          style={{ textDecoration: "none" }}
        >
          Cartes
        </Link>
        <Link
          href="/contact"
          active={page === "contact"}
          style={{ textDecoration: "none" }}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
