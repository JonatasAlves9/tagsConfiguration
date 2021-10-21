import { useContext } from "react";
import { TagContext } from "../../contexts/tag";
import styles from "./styles.module.scss";

export function InputConfig() {
  const { tag, handleChangePositionXBrand } = useContext(TagContext);
  const handleChange = (type: string, element: string) => {
    handleChangePositionXBrand(type, "brand");
  };

  return (
    <div className={styles.InputViewWrapper}>
      <input className={styles.InputText} placeholder="Nome da marca" />
      <div className={styles.ViewButtons}>
        <div className={styles.ButtonsSizeView}>
          <button
            onClick={() => handleChange("add", "Brand")}
            className={styles.Button}
          >
            +
          </button>
          <button
            onClick={() => handleChange("subtract", "Brand")}
            className={styles.Button}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
