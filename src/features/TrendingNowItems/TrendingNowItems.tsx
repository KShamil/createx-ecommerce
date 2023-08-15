"use client";

import React, { FC, ReactElement, useEffect, useState } from "react";
import { TrendingNowItemsProps } from "./TrendingNowItems.props";
import styles from "./TrendingNowItems.module.css";
import { getData } from "@/api/route";
import { Wrapper } from "@/shared/Wrapper/Wrapper";
import { IProcuctData } from "@/interfaces/interfaces";
import { TrendingCard } from "@/entities/TrendingCard/TrendingCard";
import { Button } from "@/shared/Button/Button";
import { Htag } from "@/shared/Htag/Htag";

export const TrendingNowItems: FC<TrendingNowItemsProps> = ({
  ...props
}): ReactElement => {
  const [data, setData] = useState<IProcuctData[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<number>(3);
  const LoadMoreProducts = (): void => {
    setDisplayedProducts(displayedProducts + 3);
  };
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
      <div {...props} className={styles.trendingNowItems}>
        <Wrapper direction="row">
          <div className={styles.container}>
            <div className={styles.title}>
              <Htag tag="h2">Trending now</Htag>
            </div>
            <div className={styles.content}>
              {data &&
                data
                  .slice(0, displayedProducts)
                  .map((item) => <TrendingCard key={item.id} data={item} />)}
            </div>
            {displayedProducts < data.length && (
              <Button appearance="transparent-btn" onClick={LoadMoreProducts}>
                Explore top sales
              </Button>
            )}
          </div>
        </Wrapper>
      </div>
    </>
  );
};
