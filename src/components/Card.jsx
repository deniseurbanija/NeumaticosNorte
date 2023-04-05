import autos from "@/pages/autos";
import styles from "@/styles/Card.module.css";

export default function Card() {
  return (
    <>
      <a href="autos" className={styles.div}>
        <img
          className={styles.img}
          width="200px"
          height="250px"
          src="img/autos.png"
        ></img>
        <h2 className={styles.title}>Autos y camionetas</h2>
        <p>Lorem ipsum dolor sit</p>
      </a>
      <a href="camiones" className={styles.div}>
        <img className={styles.img} src="img/camiones.png"></img>
        <h2 className={styles.title}>Camiones</h2>
        <p>Lorem ipsum dolor sit</p>
      </a>
      <a href="agricola" className={styles.div}>
        <img className={styles.img} src="img/agricola.png"></img>
        <h2 className={styles.title}>Agrícola</h2>
        <p>Lorem ipsum dolor sit</p>
      </a>
    </>
  );
}
