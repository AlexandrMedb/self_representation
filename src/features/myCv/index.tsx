import React from "react";

import { ReactComponent as AwardsIcon } from "./assets/awardsIcon.svg";
import { ReactComponent as CertificationIcon } from "./assets/certificationIcon.svg";
import { ReactComponent as EducationIcon } from "./assets/educationIcon.svg";
import { ReactComponent as ExperienceIcon } from "./assets/experienceIcon.svg";
import { ReactComponent as PersonIcon } from "./assets/personIcon.svg";
import { ReactComponent as SettingIcon } from "./assets/settingIcon.svg";
import { Award } from "./components/award";
import { ChapterWrapper } from "./components/chapterWrapper";
import { Contact } from "./components/contact";
import { CvFooter } from "./components/cvFooter";
import { DataList } from "./components/dataList";
import { Presentation } from "./components/presentation";
import { Skills } from "./components/skills";
import { certification, education, experience } from "./const/dataLists";
import { footerLinks } from "./const/footerLinks";
import { MyAwards } from "./const/myAwards";
import { myContacts } from "./const/myContacts";

import styles from "./index.module.scss";

export const MyCv = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.leftSide}>
          <Presentation />

          <ChapterWrapper title={"Контакты"} icon={PersonIcon}>
            {myContacts.map((el, i) => (
              <Contact {...el} key={i} />
            ))}
          </ChapterWrapper>

          <ChapterWrapper title={"Навыки"} icon={SettingIcon}>
            <Skills />
          </ChapterWrapper>

          <ChapterWrapper title={"Достижения"} icon={AwardsIcon}>
            {MyAwards.map((el) => (
              <Award {...el} key={el.award} />
            ))}
          </ChapterWrapper>
        </section>

        <section className={styles.rightSide}>
          <ChapterWrapper title={"Образование"} icon={EducationIcon}>
            <DataList list={education} />
          </ChapterWrapper>

          <ChapterWrapper title={"Опыт работы"} icon={ExperienceIcon}>
            <DataList list={experience} />
          </ChapterWrapper>

          <ChapterWrapper title={"Сертификаты"} icon={CertificationIcon}>
            <DataList list={certification} />
          </ChapterWrapper>
        </section>
        <CvFooter links={footerLinks} />
      </div>
    </main>
  );
};
