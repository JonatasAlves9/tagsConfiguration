import { useContext, useState } from "react";
import { TagContext } from "../../contexts/tag";

import styles from "./styles.module.scss";

export function TemplateView() {
  const { tag } = useContext(TagContext);
  return (
    <div
      className={styles.template}
      style={{
        width: tag.ContentModel.width,
        height: tag.ContentModel.height,
        borderRadius: tag.ContentModel.borderRadius,
        backgroundColor: tag.ContentModel.background,
      }}
    >
      <h1
        style={{
          position: "absolute",
          marginTop: `${tag.brand.positionX}px`,
          marginLeft: `${tag.brand.positionY}px`,
          color: tag.brand.color,
          fontSize: `${tag.brand.size}px`,
        }}
      >
        {tag.brand.name}
      </h1>
    </div>
  );
}
