import React from "react";

import styles from "./index.module.scss";

export type awardProps = {
  award: string;
  description?: string;
};

export const Award = ({ award, description }: awardProps) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.award}>{award}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
