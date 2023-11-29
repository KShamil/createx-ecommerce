import React, { FC, ReactElement } from "react";
import { InfoSectionProps } from "./InfoSection.props";
import styles from "./InfoSection.module.css";
import { SummerCollections } from "@/entities/SummerCollections/SummerCollections";
import { DealOfTheWeek } from "@/entities/DealOfTheWeek/DealOfTheWeek";
import { NewCollection } from "@/entities/NewCollection/NewCollection";
import { NewEmail } from "@/entities/NewEmail/NewEmail";

export const InfoSection: FC<InfoSectionProps> = ({
  ...props
}): ReactElement => {
  return (
    <>
      <section {...props} className={styles.infoSection}>
        <div className={styles.top}>
          <SummerCollections />
          <DealOfTheWeek />
        </div>
        <div className={styles.bottom}>
          <NewCollection />
          <NewEmail />
        </div>
      </section>
    </>
  );
};
