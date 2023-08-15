import React, { FC, ReactElement } from "react";
import { ProductCardProps } from "./ProductCard.props";
import styles from './ProductCard.module.css';

export const ProductCard: FC<ProductCardProps> = ({
  ...props
}): ReactElement => {
  return (
    <>
      <div {...props} className={styles.productCard}>ProductCard</div>
    </>
  );
};
