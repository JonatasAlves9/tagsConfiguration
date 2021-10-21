import { useContext } from "react";
import { TagContext } from "../../contexts/tag";
import { InputConfig } from "../InputConfig";

import styles from "./styles.module.scss";

export function ConfigView() {
  return (
    <div className={styles.configViewWrapper}>
      <h1 className={styles.title}>
        Criador gráfico de etiquetas penduradas personalizadas
      </h1>
      <span className={styles.description}>
        Nesta aplicação, tem a possibilidade de criar a sua própria etiqueta
        personalizada e praticamente ver a simulação gráfica em tempo real!
      </span>

      <InputConfig element="brand" />
      <InputConfig element="secondText" />
    </div>
  );
}
