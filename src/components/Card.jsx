import Link from "next/link";
import styles from "@/styles/Card.module.css";

export default function Card() {
  return (
    <>
      <div className={styles.div}>
        <img className={styles.img} src="img/autos.png"></img>
        <h2 className={styles.title}>Autos y camionetas</h2>
      </div>
      <div className={styles.div}>
        <img className={styles.img} src="img/camiones.png"></img>
        <h2 className={styles.title}>Camiones</h2>
      </div>

      <div className={styles.div}>
        <img className={styles.img} src="img/agricola.png"></img>
        <h2 className={styles.title}>Agrícola</h2>
      </div>
    </>
  );
}
