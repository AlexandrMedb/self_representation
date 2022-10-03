import React from "react";

import styles from "./index.module.scss";

export type listItem = {
  title: string;
  description?: string;
  sublist?: string[];
};

type props = {
  list: listItem[];
};

export const DataList = ({ list }: props) => {
  return (
    <div className={styles.wrapper}>
      {list.map((el) => (
        <DataItem key={el.title} {...el} />
      ))}
    </div>
  );
};

const DataItem = (listItem: listItem) => {
  const { title, description, sublist } = listItem;
  return (
    <div className={styles.container}>
      <h3 className={styles.dataTitle}>{title}</h3>
      <p className={styles.dataDescription}>{description}</p>
      <ul className={styles.dataSubList}>
        {sublist?.map((el) => (
          <li className={styles.dataSubListEl} key={el}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
