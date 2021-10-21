import { useContext } from "react";
import { TagContext } from "../../contexts/tag";
import styles from "./styles.module.scss";

export function InputConfig() {
  const {
    tag,
    handleChangePosition,
    handleChangePositionY,
    changeTextElement,
  } = useContext(TagContext);
  const handleChange = (type: string, element: string, direction: string) => {
    if (direction === "x") {
      handleChangePosition(type, element);
    }
    if (direction === "y") {
      handleChangePositionY(type, element);
    }
  };

  return (
    <div className={styles.InputViewWrapper}>
      <input
        className={styles.InputText}
        placeholder={tag.brand.name}
        onChange={(event) =>
          changeTextElement("brand", event.currentTarget.value)
        }
      />
      <div className={styles.ViewButtons}>
        <div className={styles.ButtonsSizeView}>
          <button
            onClick={() => handleChange("add", "brand", "x")}
            className={styles.Button}
          >
            +
          </button>
          <button
            onClick={() => handleChange("subtract", "brand", "x")}
            className={styles.Button}
          >
            -
          </button>
        </div>
        <div className={styles.ButtonsSizeView}>
          <button
            onClick={() => handleChange("add", "brand", "y")}
            className={styles.Button}
          >
            +
          </button>
          <button
            onClick={() => handleChange("subtract", "brand", "y")}
            className={styles.Button}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
