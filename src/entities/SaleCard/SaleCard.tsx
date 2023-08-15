import React, { FC, ReactElement } from "react";
import { SaleCardProps } from "./SaleCard.props";
import styles from "./SaleCard.module.css";
import Image from "next/image";
import WishlistIcon from "./outline.svg";
import { Rating } from "@mui/material";

export const SaleCard: FC<SaleCardProps> = ({
  data,
  ...props
}): ReactElement => {
  const { image, rating, title, price } = data;
  return (
    <>
      <div {...props} className={styles.saleCard}>
        <div className={styles.top}>
          <div className={styles.rating}>
            <span className={styles.badge}>-50%</span>
            <Rating size="small" defaultValue={rating.rate} />
          </div>
          <div className={styles.image}>
            <Image
              src={image}
              alt="error"
              width={285}
              height={320}
              className={styles.img}
            />
          </div>
          <div className={styles.wishlist}>
            <WishlistIcon className={styles.icon} />
          </div>
        </div>
        <div className={styles.bottom}>
          <span className={styles.title}>{title}</span>
          <b className={styles.price}>${price}</b>
        </div>
      </div>
    </>
  );
};
