import React from "react";

import myPhoto from "../../assets/myPhoto.png";

import styles from "./index.module.scss";

export const Presentation = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.name}>Александр Тарасов</h1>
      <h2 className={styles.profession}>Frontend Developer</h2>
      <div className={styles.imgContainer}>
        <img src={myPhoto} alt="frontenders`s photo" />
      </div>
      <div className={styles.aboutMeContainer}>
        Frontend Developer с двух летним опытом разработки пользовательских
        интерфейсов на стеке TS, React/Redux, SASS.
      </div>
    </section>
  );
};
