import React, { FC, ReactNode } from "react";

import styles from "./index.module.scss";

type props = {
  children?: ReactNode;
  title: string;
  icon?: FC<React.SVGProps<SVGSVGElement>>;
};

export const ChapterWrapper = (props: props) => {
  const { title, icon: Icon, children } = props;
  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>
        {Icon && <Icon className={styles.icon} />}
        <h3>{title}</h3>
      </div>

      <div className={styles.children}>{children}</div>
    </section>
  );
};
