import styles from "@/styles/Products.module.css";

export default function Products({ title, price }) {
  return (
    <div className={styles.div}>
      <h2>{title}</h2>
      <h4 className={styles.h4}>{price}</h4>
    </div>
  );
}
