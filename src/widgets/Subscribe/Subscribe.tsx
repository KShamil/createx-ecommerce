import React, { FC, ReactElement } from "react";
import { SubscribeProps } from "./Subscribe.props";
import styles from "./Subscribe.module.css";
import { SubscribeItems } from "@/features/SubscribeItems/SubscribeItems";

export const Subscribe: FC<SubscribeProps> = ({ ...props }): ReactElement => {
  return (
    <>
      <section {...props} className={styles.subscribe}>
        <SubscribeItems />
      </section>
    </>
  );
};
