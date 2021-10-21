import { TagView } from "./components/TagView";

import styles from "./app.module.scss";
import { ConfigView } from "./components/ConfigView";
import { useState } from "react";

function App() {
  return (
    <div className={styles.wrapper}>
      <TagView />
      <ConfigView />
    </div>
  );
}

export default App;
