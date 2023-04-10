import Link from "next/link";
import styles from "@/styles/Card.module.css";

export default function Card() {
  return (
    <>
      <Link href="autos" className={styles.div}>
        <div>
          <img className={styles.img} src="img/autos.png"></img>
          <h2 className={styles.title}>Autos y camionetas</h2>
          <p>Lorem ipsum dolor sit</p>
        </div>
      </Link>
      <Link href="camiones" className={styles.div}>
        <div>
          <img className={styles.img} src="img/camiones.png"></img>
          <h2 className={styles.title}>Camiones</h2>
          <p>Lorem ipsum dolor sit</p>
        </div>
      </Link>
      <Link href="agricola" className={styles.div}>
        <div>
          <img className={styles.img} src="img/agricola.png"></img>
          <h2 className={styles.title}>Agrícola</h2>
          <p>Lorem ipsum dolor sit</p>
        </div>
      </Link>
    </>
  );
}
