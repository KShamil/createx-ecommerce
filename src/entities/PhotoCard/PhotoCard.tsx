import React, { FC, ReactElement } from "react";
import { PhotoCardProps } from "./PhotoCard.props";
import styles from "./PhotoCard.module.css";
import Image from "next/image";

export const PhotoCard: FC<PhotoCardProps> = ({
  data,
  ...props
}): ReactElement => {
  const { img, text } = data;
  return (
    <>
      <div {...props} className={styles.photoCard}>
        <div className={styles.image}>
          <Image src={img} alt="" className={styles.photo} />
        </div>
        <span className={styles.span}>{text}</span>
      </div>
    </>
  );
};
