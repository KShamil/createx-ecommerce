import React, { FC, ReactElement } from "react";
import { TrendingCardProps } from "./TrendingCard.props";
import styles from "./TrendingCard.module.css";
import { Rating } from "@mui/material";
import Image from "next/image";
import WishlistIcon from "./outline.svg";

export const TrendingCard: FC<TrendingCardProps> = ({
  data,
  ...props
}): ReactElement => {
  const { image, rating, title, price } = data;
  return (
    <>
      <div {...props} className={styles.trendingCard}>
        <div className={styles.top}>
          <div className={styles.rating}>
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
