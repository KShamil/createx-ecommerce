import React, { FC, ReactElement } from "react";
import { ServicesCardProps } from "./ServicesCard.props.";
import styles from "./ServicesCard.module.css";
import Image from "next/image";

export const ServicesCard: FC<ServicesCardProps> = ({
  data,...props
}): ReactElement => {
    const {img,title,subtitle} = data
  return (
    <>
      <div {...props} className={styles.servicesCard}>
        <div className={styles.image}>
          <Image src={img} alt="error" />
        </div>
        <div className={styles.info}>
          <h4 className={styles.title}>{title}</h4>
          <span className={styles.subtitle}>{subtitle}</span>
        </div>
      </div>
    </>
  );
};
