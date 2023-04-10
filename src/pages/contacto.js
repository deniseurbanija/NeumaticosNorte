import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";

export default function Contacto() {
  return (
    <>
      <Layout>
        <div className={styles.div}>
          <h1>Contacto</h1>
          <p>
            <span>Direccion: </span> Av. 25 de mayo 1170 - Resistencia, Chaco
          </p>
          <p>
            <span>Telefono: </span> (0362) 442-9900
          </p>
          <p>
            <span>Celular: </span> (0362) 421-3700
          </p>
          <p>
            <span>Email: </span> neumaticosnortesrl@hotmail.com
          </p>
          <p>
            <span>Facebook: </span> Neumaticos Norte
          </p>
          <p>
            <span>Instagram: </span> @neumaticosnorte
          </p>
        </div>
      </Layout>
    </>
  );
}
