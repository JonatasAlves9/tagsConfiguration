import { useContext } from "react";
import { TagContext } from "../../contexts/tag";
import styles from "./styles.module.scss";

type Props = {
  element: string;
};

export function InputConfig({ element }: Props) {
  const {
    tag,
    handleChangePosition,
    handleChangePositionY,
    changeTextElement,
  } = useContext(TagContext);
  const handleChange = (type: string, element: string, direction: string) => {
    console.log(type, element, direction);
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
        placeholder={tag[element].name}
        onChange={(event) =>
          changeTextElement(element, event.currentTarget.value)
        }
      />
      <div className={styles.ViewButtons}>
        <div className={styles.ButtonsSizeView}>
          <button
            onClick={() => handleChange("add", element, "x")}
            className={styles.Button}
          >
            +
          </button>
          <button
            onClick={() => handleChange("subtract", element, "x")}
            className={styles.Button}
          >
            -
          </button>
        </div>
        <div className={styles.ButtonsSizeView}>
          <button
            onClick={() => handleChange("add", element, "y")}
            className={styles.Button}
          >
            +
          </button>
          <button
            onClick={() => handleChange("subtract", element, "y")}
            className={styles.Button}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
