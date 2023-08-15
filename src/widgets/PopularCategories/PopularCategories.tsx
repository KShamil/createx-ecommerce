import React, { FC, ReactElement } from "react";
import { PopularCategoriesProps } from "./PopularCategories.props";
import styles from "./PopularCategories.module.css";
import { Wrapper } from "@/shared/Wrapper/Wrapper";
import { Htag } from "@/shared/Htag/Htag";
import { PopularCategoriesItems } from "@/features/PopularCategoriesItems/PopularCategoriesItems";

export const PopularCategories: FC<PopularCategoriesProps> = ({
  ...props
}): ReactElement => {
  return (
    <>
      <section {...props} className={styles.popularCategories}>
        <Wrapper direction="column">
          <div className={styles.title}>
            <Htag tag="h2">Popular categories</Htag>
          </div>
          <PopularCategoriesItems />
        </Wrapper>
      </section>
    </>
  );
};
