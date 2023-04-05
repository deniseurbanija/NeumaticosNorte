import styles from "@/styles/NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <a className={styles.a} href="/">
            Inicio
          </a>
        </li>
        <li>
          <a className={styles.a} href="nosotros">
            Sobre nosotros
          </a>
        </li>
        <li>
          <a className={styles.a} href="contacto">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
