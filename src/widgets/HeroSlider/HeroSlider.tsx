import React, { FC, ReactElement } from "react";
import { HeroSliderProps } from "./HeroSlider.props";
import styles from "./HeroSlider.module.css";
import { HeroSliderItems } from "@/features/HeroSliderItems/HeroSliderItems";
import { heroData } from "@/data/data";

export const HeroSlider: FC<HeroSliderProps> = ({ ...props }): ReactElement => {
  return (
    <>
      <section {...props} className={styles.heroSlider}>
        {heroData &&
          heroData.map((item) => <HeroSliderItems key={item.id} data={item} />)}
      </section>
    </>
  );
};
