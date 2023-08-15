import React, { FC, ReactElement } from "react";
import { PopularCategoriesItemsProps } from "./PopularCategoriesItems.props";
import styles from "./PopularCategoriesItems.module.css";
import { populatCategoriesData } from "@/data/data";
import { PopularCategoriesCard } from "@/entities/PopularCategoriesCard/PopularCategoriesCard";

export const PopularCategoriesItems: FC<PopularCategoriesItemsProps> = ({
  ...props
}): ReactElement => {
  return (
    <>
      <div {...props} className={styles.popularCategoriesItems}>
        <div className={styles.container}>
          {populatCategoriesData &&
            populatCategoriesData.map((item) => (
              <PopularCategoriesCard key={item.id} data={item} />
            ))}
        </div>
      </div>
    </>
  );
};
