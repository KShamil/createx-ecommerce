import React, { FC, ReactElement } from "react";
import { HeroSliderItemsProps } from "./HeroSliderItems.props";
import styles from "./HeroSliderItems.module.css";
import { Wrapper } from "@/shared/Wrapper/Wrapper";
import { Htag } from "@/shared/Htag/Htag";
import { Button } from "@/shared/Button/Button";
import Image from 'next/image';

export const HeroSliderItems: FC<HeroSliderItemsProps> = ({
  data,
  ...props
}): ReactElement => {
  const { subtitle, title, img, link1, link2 } = data;
  const backgroundUrl = 'url("../../../public/hero-img/image.png")'
  return (
    <>
      <div
        {...props}
        className={styles.heroSliderItems}
        // style={{ backgroundImage: backgroundUrl }}
      >
        <Wrapper direction='row'>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.info}>
                <span className={styles.subtitle}>{subtitle}</span>
                <Htag tag="h1">{title}</Htag>
              </div>
              <div className={styles.btns}>
                <Button appearance="transparent-btn">{link1}</Button>
                <Button appearance="primary-btn">{link2}</Button>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};
