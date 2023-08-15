import React, { FC, ReactElement } from "react";
import { ServicesSectionProps } from "./ServicesSection.props";
import styles from "./ServicesSection.module.css";
import { servicesData } from "@/data/data";
import { Wrapper } from "@/shared/Wrapper/Wrapper";
import { ServicesCard } from "@/entities/ServicesCard/ServicesCard";

export const ServicesSection: FC<ServicesSectionProps> = ({
  ...props
}): ReactElement => {
  return (
    <>
      <section {...props} className={styles.services}>
        <Wrapper direction="row">
          <div className={styles.container}>
            {servicesData &&
              servicesData.map((item) => (
                <ServicesCard key={item.id} data={item} />
              ))}
          </div>
        </Wrapper>
      </section>
    </>
  );
};
