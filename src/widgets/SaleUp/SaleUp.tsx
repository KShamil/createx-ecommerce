import React, { FC, ReactElement } from "react";
import { SaleUpProps } from "./SaleUp.props";
import styles from "./SaleUp.module.css";
import { SaleItems } from "@/features/SaleItems/SaleItems";

export const SaleUp: FC<SaleUpProps> = ({ ...props }): ReactElement => {
  return (
    <>
      <section {...props} className={styles.saleUp}>
        <SaleItems />
      </section>
    </>
  );
};
