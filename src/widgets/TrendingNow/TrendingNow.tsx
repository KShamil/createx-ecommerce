import React, { FC, ReactElement } from "react";
import { TrendingNowProps } from "./TrendingNow.props";
import styles from "./TrendingNow.module.css";
import { TrendingNowItems } from "@/features/TrendingNowItems/TrendingNowItems";

export const TrendingNow: FC<TrendingNowProps> = ({
  ...props
}): ReactElement => {
  return (
    <>
      <section {...props} className={styles.trendingNow}>
        <TrendingNowItems />
      </section>
    </>
  );
};
