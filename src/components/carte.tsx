import Image from "next/image";

import styles from "../assets/css/carte.module.css";
import Link from "./link";
import PageLayout from "./page-layout";

type CarteProps = {
  page: "carte-au-poids" | "carte-sur-place";
  pdf: string;
  images: string[];
};

export default function Carte({ pdf, images, page }: CarteProps) {
  return (
    <PageLayout page={page}>
      <nav className={styles["carte-nav"]}>
        <Link
          href="/carte-au-poids"
          active={page === "carte-au-poids"}
          className={`${styles["carte-nav-link"]} ${
            page === "carte-au-poids" ? styles.active : ""
          }`}
        >
          Vente au poids
        </Link>
        <Link
          href="/carte-sur-place"
          active={page === "carte-sur-place"}
          className={`${styles["carte-nav-link"]} ${
            page === "carte-sur-place" ? styles.active : ""
          }`}
        >
          Sur place
        </Link>
      </nav>

      <object
        data={`${pdf}#toolbar=1`}
        style={{ width: "100%", minHeight: "1100px" }}
      >
        <a href={pdf} rel="noreferrer" target="_blank">
          {images.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={`carte-page-${index + 1}`}
              width={0}
              height={0}
              layout="responsive"
              style={{ marginBottom: 2 }}
            />
          ))}
        </a>
      </object>
    </PageLayout>
  );
}
