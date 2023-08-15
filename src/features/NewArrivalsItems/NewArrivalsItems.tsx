"use client";

import React, { FC, ReactElement, useEffect, useState } from "react";
import { getData } from "@/api/route";
import { NewArrivalsCard } from "@/entities/NewArrivalsCard/NewArrivalsCard";
import { Wrapper } from "@/shared/Wrapper/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import styles from "./NewArrivalsItems.module.css";
import { NewArrivalsItemsProps } from "./NewArrivalsItems.props";
import { IProcuctData } from "@/interfaces/interfaces";

export const NewArrivalsItems: FC<NewArrivalsItemsProps> = ({
  ...props
}): ReactElement => {
  const [data, setData] = useState<IProcuctData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className={styles.newArrivalsItems} {...props}>
        <Wrapper direction="row">
          <div className={styles.container}>
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className={styles.swiper}
            >
              {data &&
                data.map((item) => (
                  <SwiperSlide key={item.id} className={styles.swiperSlider}>
                    <NewArrivalsCard data={item} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </Wrapper>
      </div>
    </>
  );
};
