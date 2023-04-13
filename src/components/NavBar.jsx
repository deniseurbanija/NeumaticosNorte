import styles from "@/styles/NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <Link className={styles.a} href="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className={styles.a} href="nosotros">
            Sobre nosotros
          </Link>
        </li>
        <li>
          <Link className={styles.a} href="contacto">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
