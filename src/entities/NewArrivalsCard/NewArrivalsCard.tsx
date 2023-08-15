import React, { FC, ReactElement } from "react";
import { NewArrivalsCardProps } from "./NewArrivalsCard.props";
import styles from "./NewArrivalsCard.module.css";
import Image from "next/image";
import WishlistIcon from "./outline.svg";
import { Rating } from "@mui/material";

export const NewArrivalsCard: FC<NewArrivalsCardProps> = ({
  data,...props
}): ReactElement => {
    const {title,price,image,rating} = data
  return (
    <>
      <div {...props} className={styles.newArrivalsCard}>
        <div className={styles.top}>
          <div className={styles.rating}>
            <Rating size="small" defaultValue={rating.rate}/>
          </div>
          <div className={styles.image}>
            <Image src={image} alt="error" width={285} height={320} className={styles.img}/>
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
