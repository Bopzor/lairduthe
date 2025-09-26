import Image from "next/image";
import Link from "next/link";

import styles from "../assets/css/home.module.css";

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={900}
          height={161}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <h1 className={styles.title}>Maison de thé Havraise - Restaurant</h1>
      </div>

      <div className={styles.homeLinkWrapper}>
        <Link href="/presentation" className={styles.homeLink}>
          Entrée
        </Link>
      </div>
    </div>
  );
}
