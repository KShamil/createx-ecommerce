import React, { FC, ReactElement } from "react";
import { PopularCategoriesCardProps } from "./PopularCategoriesCard.props";
import styles from "./PopularCategoriesCard.module.css";
import Image from "next/image";

export const PopularCategoriesCard: FC<PopularCategoriesCardProps> = ({
  data,
  ...props
}): ReactElement => {
  const { img, name } = data;
  return (
    <>
      <div {...props} className={styles.popularCategoriesCard}>
        <div className={styles.image}>
          <Image src={img} alt={name} className={styles.img}/>
        </div>
        <div className={styles.categoriesName}>
          <span className={styles.name}>{name}</span>
        </div>
      </div>
    </>
  );
};
