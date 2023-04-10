import NavBar from "./NavBar";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Neumaticos Norte</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="img/bridgestone.png" />
      </Head>
      <div className={styles.header}>
        <img className={styles.logo} src="img/logo.png"></img>
      </div>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </>
  );
}
