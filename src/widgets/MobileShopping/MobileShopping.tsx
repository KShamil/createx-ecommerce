import React, { FC, ReactElement } from "react";
import { MobileShoppingProps } from "./MobileShopping.props";
import styles from "./MobileShopping.module.css";
import { Wrapper } from "@/shared/Wrapper/Wrapper";
import Image from "next/image";
import AppStoreIcon from "./app-store.svg";
import GooglePlayIcon from "./google-play.svg";
import MobileShoppingImg from "./image.png";

export const MobileShopping: FC<MobileShoppingProps> = ({
  ...props
}): ReactElement => {
  return (
    <>
      <section {...props} className={styles.mobileShopping}>
        <Wrapper direction="row">
          <div className={styles.container}>
            <div className={styles.image}>
              <Image src={MobileShoppingImg} alt="error" className={styles.img}/>
            </div>
            <div className={styles.info}>
              <h3 className={styles.title}>
                Enjoy mobile shopping with our Createx <br /> Store App!
              </h3>
              <div className={styles.mobileApp}>
                <AppStoreIcon className={styles.icon} />
                <GooglePlayIcon className={styles.icon} />
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};
