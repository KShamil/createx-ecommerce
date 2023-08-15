import React, { FC, ReactElement } from "react";
import { SubscribeItemsProps } from "./SubscribeItems.props";
import styles from "./SubscribeItems.module.css";
import { Wrapper } from "@/shared/Wrapper/Wrapper";
import { Htag } from "@/shared/Htag/Htag";
import { Button } from "@/shared/Button/Button";
import { Input } from "@/shared/Input/Input";
import img from "./image.png";
import Image from "next/image";

export const SubscribeItems: FC<SubscribeItemsProps> = ({
  ...props
}): ReactElement => {
  return (
    <>
      <div {...props} className={styles.subscribeItems}>
        <Wrapper direction="row">
          <div className={styles.container}>
            <div className={styles.info}>
              <div className={styles.title}>
                <Htag tag="h2">Subscribe for updates</Htag>
                <p>
                  Subscribe for exclusive early sale access and new arrivals.
                </p>
              </div>
              <div className={styles.buttons}>
                <Button appearance="ghost-btn">Women</Button>
                <Button appearance="ghost-btn">Men</Button>
                <Button appearance="ghost-btn">Girls</Button>
                <Button appearance="ghost-btn">Boys</Button>
              </div>
              <div className={styles.input}>
                <label htmlFor="" className={styles.label}>Email</label>
                <div className={styles.inputContainer}>
                  <Input
                    appearance="subscribe-input"
                    type="email"
                    name="email"
                    placeholder="Your working email"
                  />
                  <Button appearance="subscribe-btn">Subscribe</Button>
                </div>
              </div>
              <div className={styles.agreement}>
                <input type="checkbox" className={styles.chechbox}/>
                <p className={styles.text}>
                  I agree to receive communications from Createx Store.
                </p>
              </div>
            </div>
            <div className={styles.image}>
              <Image src={img} alt="error" />
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};
