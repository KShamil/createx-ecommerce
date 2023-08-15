import React, { FC, ReactElement } from "react";
import { FashionBlogProps } from "./FashionBlog.props";
import styles from "./FashionBlog.module.css";
import { FashionBlogItems } from "@/features/FashionBlogItems/FashionBlogItems";

export const FashionBlog: FC<FashionBlogProps> = ({
  ...props
}): ReactElement => {
  return (
    <>
      <section {...props} className={styles.fashionBlog}>
        <FashionBlogItems />
      </section>
    </>
  );
};
