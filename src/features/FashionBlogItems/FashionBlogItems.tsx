import React, { FC, ReactElement } from "react";
import { FashionBlogItemsProps } from "./FashionBlogItems.props";
import styles from "./FashionBlogItems.module.css";
import { Wrapper } from "@/shared/Wrapper/Wrapper";
import { Htag } from "@/shared/Htag/Htag";
import { Button } from "@/shared/Button/Button";
import { fashionBlogData } from "@/data/data";
import { FashionBlogCard } from "@/entities/FashionBlogCard/FashionBlogCard";
import PartnersImg from "./image.png";
import PartnersImg2 from "./image2.png";
import PartnersImg3 from "./image3.png";
import PartnersImg4 from "./image4.png";
import PartnersImg5 from "./image5.png";
import PartnersImg6 from "./image6.png";
import Image from "next/image";

export const FashionBlogItems: FC<FashionBlogItemsProps> = ({
  ...props
}): ReactElement => {
  return (
    <>
      <div {...props} className={styles.fashionBlogItems}>
        <Wrapper direction="row">
          <div className={styles.container}>
            <div className={styles.title}>
              <Htag tag="h2">Fashion blog</Htag>
              <Button appearance="info-btn">View blog</Button>
            </div>
            <div className={styles.content}>
              {fashionBlogData &&
                fashionBlogData.map((blog) => (
                  <FashionBlogCard key={blog.id} data={blog} />
                ))}
            </div>
            <div className={styles.partners}>
              <Image src={PartnersImg} alt="error" className={styles.img} />
              <Image src={PartnersImg2} alt="error" className={styles.img} />
              <Image src={PartnersImg3} alt="error" className={styles.img} />
              <Image src={PartnersImg4} alt="error" className={styles.img} />
              <Image src={PartnersImg5} alt="error" className={styles.img} />
              <Image src={PartnersImg6} alt="error" className={styles.img} />
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};
