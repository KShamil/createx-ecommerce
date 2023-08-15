import React, { FC, ReactElement } from "react";
import { CategoriesItemsProps } from "./CategoriesItems.props";
import styles from "./CategoriesItems.module.css";
import { Wrapper } from "@/shared/Wrapper/Wrapper";
import { Container } from "@/shared/Container/Container";
import { PhotoCardData } from "@/data/data";
import { PhotoCard } from "@/entities/PhotoCard/PhotoCard";

export const CategoriesItems: FC<CategoriesItemsProps> = ({
  ...props
}): ReactElement => {
  return (
    <>
      <div {...props} className={styles.categoriesItems}>
        <Wrapper direction='row'>
          <div className={styles.container}>
            {PhotoCardData &&
              PhotoCardData.map((item) => (
                <PhotoCard key={item.id} data={item} />
              ))}
          </div>
        </Wrapper>
      </div>
    </>
  );
};
