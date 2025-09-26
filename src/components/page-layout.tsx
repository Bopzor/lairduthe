import type React from "react";

import styles from "../assets/css/page-layout.module.css";
import Footer from "./footer";
import Header from "./header";

type PageLayoutProps = {
  page: string;
  children: React.ReactNode;
};

export default function PageLayout({ page, children }: PageLayoutProps) {
  return (
    <div className={styles.root}>
      <div className={`${styles.background} ${styles[page]}`} />

      <div className={styles.wrapper}>
        <div
          className={`${styles["content-wrapper"]} ${
            page.includes("carte")
              ? styles["content-wrapper-background-opacity"]
              : styles["content-wrapper-background-light-opacity"]
          }`}
        >
          <Header page={page} />
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
