import styles from "../assets/css/footer.module.css";
import Link from "./link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      Made with {"<3"} and{" "}
      <Link href="https://react.dev/" rel="noreferrer" target="_blank">
        React
      </Link>{" "}
      by{" "}
      <Link
        href="https://github.com/bopzor/lairduthe"
        rel="noreferrer"
        target="_blank"
      >
        Bopzor & Nils
      </Link>{" "}
      - 2025
    </div>
  );
}
