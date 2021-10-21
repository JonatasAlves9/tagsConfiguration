import { useContext } from "react";
import { TemplateView } from "../TemplateTag";

import styles from "./styles.module.scss";

export function TagView() {
  return (
    <div className={styles.tagViewWrapper}>
      <TemplateView />
    </div>
  );
}
