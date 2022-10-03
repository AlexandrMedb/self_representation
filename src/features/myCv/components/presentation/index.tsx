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
        Web Developer with 8 years of experience in designing and developing
        user interfaces, testing, debugging, and training staff within eCommerce
        technologies. Proven ability in optimizing web functionality that
        improve data retrieval and workflow efficiencies.
      </div>
    </section>
  );
};
