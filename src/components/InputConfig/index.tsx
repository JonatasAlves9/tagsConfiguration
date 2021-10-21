import styles from "./styles.module.scss";

export function InputConfig() {
  return (
    <div className={styles.InputViewWrapper}>
      <input className={styles.InputText} placeholder="Nome da marca" />
      <div className={styles.ViewButtons}>
        <div className={styles.ButtonsSizeView}>
          <button className={styles.Button}>+</button>
          <button className={styles.Button}>-</button>
        </div>
        <div className={styles.ButtonsSizeView}>
          <button className={styles.Button}>+</button>
          <button className={styles.Button}>-</button>
        </div>
      </div>
    </div>
  );
}
