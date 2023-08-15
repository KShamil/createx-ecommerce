import React, { FC, ReactElement } from "react";
import { FashionBlogCardProps } from "./FashionBlogCard.props";
import styles from "./FashionBlogCard.module.css";
import Image from "next/image";

export const FashionBlogCard: FC<FashionBlogCardProps> = ({
  data,
  ...props
}): ReactElement => {
  const { img, title, subtitle, description } = data;
  return (
    <>
      <div {...props} className={styles.fashionBlogCard}>
        <div className={styles.image}>
          <Image src={img} alt={title} />
        </div>
        <div className={styles.info}>
          <h5 className={styles.title}>{title}</h5>
          <span className={styles.subtitle}>{subtitle}</span>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </>
  );
};
