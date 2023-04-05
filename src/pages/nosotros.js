import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";

export default function SobreNosotros() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.header}>
          <img className={styles.logo} src="img/logo.png"></img>
          <h1 className={styles.titulo}>Neumaticos Norte</h1>
        </div>
        <NavBar />
        <h1>Sobre Nosotros</h1>
      </main>
    </>
  );
}
