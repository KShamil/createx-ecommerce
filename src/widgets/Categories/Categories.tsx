import React, { FC, ReactElement } from "react";
import { CategoriesProps } from "./Categories.props";
import { CategoriesItems } from "@/features/CategoriesItems/CategoriesItems";
import styles from "./Categories.module.css";

export const Categories: FC<CategoriesProps> = ({ ...props }): ReactElement => {
  return (
    <>
      <section {...props} className={styles.categories}>
        <CategoriesItems />
      </section>
    </>
  );
};
