import React, { FC, ReactElement } from "react";
import { SummerCollectionsProps } from "./SummerCollections.props";
import styles from "./SummerCollections.module.css";
import { Htag } from '@/shared/Htag/Htag';
import { Button } from '@/shared/Button/Button';

export const SummerCollections: FC<SummerCollectionsProps> = ({
  ...props
}): ReactElement => {
  return (
    <>
      <div {...props} className={styles.summerCollections}>
        <div className={styles.title}>
            <span className={styles.subtitle}>Summer Collections</span>
            <Htag tag='h3'>Sale Up to 70%</Htag>
        </div>
        <Button appearance='info-btn'>Explore new prices</Button>
      </div>
    </>
  );
};
