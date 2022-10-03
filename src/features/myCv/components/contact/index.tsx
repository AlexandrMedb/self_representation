import React, { FC } from "react";

import styles from "./index.module.scss";

export type contactProps = {
  icon: FC<React.SVGProps<SVGSVGElement>>;
  contact: string;
};

export const Contact = ({ contact, icon: Icon }: contactProps) => {
  return (
    <div className={styles.wrapper}>
      <Icon className={styles.icon} />
      <p className={styles.contact}>{contact}</p>
    </div>
  );
};
