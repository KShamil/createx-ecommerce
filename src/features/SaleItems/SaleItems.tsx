"use client";

import React, { FC, ReactElement, useEffect, useState } from "react";
import { SaleItemsProps } from "./SaleItems.props";
import styles from "./SaleItems.module.css";
import { IProcuctData } from "@/interfaces/interfaces";
import { getData } from "@/api/route";
import { Wrapper } from "@/shared/Wrapper/Wrapper";
import { Htag } from "@/shared/Htag/Htag";
import { SaleCard } from "@/entities/SaleCard/SaleCard";
import { Button } from "@/shared/Button/Button";

export const SaleItems: FC<SaleItemsProps> = ({ ...props }): ReactElement => {
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
      <div {...props} className={styles.saleItems}>
        <Wrapper direction="row">
          <div className={styles.container}>
            <div className={styles.title}>
              <Htag tag="h2">Sale up to 70%</Htag>
            </div>
            <div className={styles.content}>
              {data &&
                data
                  .slice(0, displayedProducts)
                  .map((item) => <SaleCard key={item.id} data={item} />)}
            </div>
            {displayedProducts < data.length && (
              <Button appearance="transparent-btn" onClick={LoadMoreProducts}>
                See all sale products
              </Button>
            )}
          </div>
        </Wrapper>
      </div>
    </>
  );
};
