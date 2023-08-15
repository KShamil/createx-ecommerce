import React, { FC, ReactElement } from "react";
import { NewEmailProps } from "./NewEmail.props";
import styles from "./NewEmail.module.css";
import { Htag } from "@/shared/Htag/Htag";
import { Button } from "@/shared/Button/Button";
import { Input } from "@/shared/Input/Input";
import Image from 'next/image';
import BgImage from './image.png';

export const NewEmail: FC<NewEmailProps> = ({ ...props }): ReactElement => {
  return (
    <>
      <div {...props} className={styles.newEmail}>
        <div className={styles.title}>
          <span className={styles.subtitle}>For All new Email Subscribers</span>
          <Htag tag="h3">Get 5% Off & Free Delivery</Htag>
        </div>
        <div className={styles.subscribe}>
          <label htmlFor="" className={styles.label}>
            Email
          </label>
          <div className={styles.input}>
            <Input
              appearance="subscribe-input"
              type="email"
              placeholder="Your working email"
            />
            <Button appearance="subscribe-btn">Subscribe</Button>
          </div>
        </div>
        <div className={styles.text}>
          <p>
            *Sign up to be the first to hear about exclusive deals, special <br />
            offers and upcoming collections.
          </p>
        </div>
        <Image src={BgImage} alt='error' className={styles.img}/>
      </div>
    </>
  );
};
