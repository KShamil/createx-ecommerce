import React, { FC, ReactElement } from "react";
import { NewCollectionProps } from "./NewCollection.props";
import styles from "./NewCollection.module.css";
import { Button } from "@/shared/Button/Button";
import { Htag } from "@/shared/Htag/Htag";

export const NewCollection: FC<NewCollectionProps> = ({
  ...props
}): ReactElement => {
  return (
    <>
      <div {...props} className={styles.newCollection}>
        <div className={styles.title}>
          <span className={styles.subtitle}>New collection</span>
          <Htag tag="h3">
            Shoes & Bags <br />
            autumn / winter 2020
          </Htag>
        </div>
        <Button appearance="info-btn">See offers</Button>
      </div>
    </>
  );
};
