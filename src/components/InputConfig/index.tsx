import { useContext } from "react";
import { TagContext } from "../../contexts/tag";
import styles from "./styles.module.scss";

export function InputConfig() {
  const { tag, handleChangePositionXBrand } = useContext(TagContext);
  const handleChange = (type: string) => {
    handleChangePositionXBrand(type);
  };

  return (
    <div className={styles.InputViewWrapper}>
      <input className={styles.InputText} placeholder="Nome da marca" />
      <div className={styles.ViewButtons}>
        <div className={styles.ButtonsSizeView}>
          <button onClick={() => handleChange("add")} className={styles.Button}>
            +
          </button>
          <button
            onClick={() => handleChange("subtract")}
            className={styles.Button}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
