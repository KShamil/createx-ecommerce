import React, { FC, ReactElement } from "react";
import { DealOfTheWeekProps } from "./DealOfTheWeek.props";
import styles from "./DealOfTheWeek.module.css";
import { Htag } from "@/shared/Htag/Htag";
import { Button } from "@/shared/Button/Button";

export const DealOfTheWeek: FC<DealOfTheWeekProps> = ({
  ...props
}): ReactElement => {
  return (
    <>
      <div {...props} className={styles.dailOfTheWeek}>
        <div className={styles.title}>
          <span className={styles.subtitle}>Deal of the week</span>
          <Htag tag="h3">Stay Warm With Our <br />New Sweaters</Htag>
        </div>
        <div className={styles.btn}>
          <Button appearance="info-btn">Shop now</Button>
        </div>
        <div className={styles.offer}>
            <span className={styles.subtitle}>Limited time offer</span>
            <div className={styles.date}>
                <div className={styles.dateItem}>
                    <span className={styles.number}>06</span>
                    <span className={styles.text}>Days</span>
                </div>
                <div className={styles.dateItem}>
                    <span className={styles.number}>18</span>
                    <span className={styles.text}>Hours</span>
                </div>
                <div className={styles.dateItem}>
                    <span className={styles.number}>24</span>
                    <span className={styles.text}>Mins</span>
                </div>
                <div className={styles.dateItem}>
                    <span className={styles.number}>12</span>
                    <span className={styles.text}>Sec</span>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};
