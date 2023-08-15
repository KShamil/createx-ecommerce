import React, { FC, ReactElement } from "react";
import { NewArrivalsProps } from "./NewArrivals.props";
import { Wrapper } from "@/shared/Wrapper/Wrapper";
import styles from "./NewArrivals.module.css";
import { NewArrivalsItems } from "@/features/NewArrivalsItems/NewArrivalsItems";
import { Htag } from "@/shared/Htag/Htag";
import Link from "next/link";

export const NewArrivals: FC<NewArrivalsProps> = ({
  ...props
}): ReactElement => {
  return (
    <>
      <section {...props} className={styles.newArrivals}>
        <Wrapper direction="column">
          <div className={styles.title}>
            <Htag tag="h2">New arrivals</Htag>
            <p className={styles.p}>
              Check out our latest arrivals for the upcoming season <br /><br />
              <Link href={""} className={styles.link}>See the collection here</Link>
            </p>
          </div>
          <NewArrivalsItems />
        </Wrapper>
      </section>
    </>
  );
};
