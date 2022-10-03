import React from "react";

import { mySkills } from "../../const/mySkills";

import styles from "./index.module.scss";

export const Skills = () => {
  return (
    <div className={styles.wrapper}>
      {mySkills.map((el) => (
        <div key={el} className={styles.skill}>
          {el}
        </div>
      ))}
    </div>
  );
};
