import React, { FC } from "react";

import styles from "./index.module.scss";

export type contactProps = {
  icon: FC<React.SVGProps<SVGSVGElement>>;
  contact: string;
  link?: string;
};

export const Contact = ({ contact, icon: Icon }: contactProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconContainer}>
        <Icon className={styles.icon} />
      </div>
      <p className={styles.contact}>{contact}</p>
    </div>
  );
};
