import React, { FC } from "react";

import styles from "./index.module.scss";

export type mediaLinkProps = {
  link: string;
  icon: FC<React.SVGProps<SVGSVGElement>>;
};

type props = {
  links: mediaLinkProps[];
};

export const CvFooter = ({ links }: props) => {
  return (
    <footer className={styles.wrapper}>
      {links.map((el) => (
        <MediaLink key={el.link} {...el} />
      ))}
    </footer>
  );
};

const MediaLink = ({ link, icon: Icon }: mediaLinkProps) => {
  return (
    <div className={styles.container}>
      <Icon className={styles.icon} />
      <p className={styles.link}>{link}</p>
    </div>
  );
};
