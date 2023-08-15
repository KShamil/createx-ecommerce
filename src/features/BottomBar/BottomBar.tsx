import React, { FC, ReactElement } from "react";
import { BottomBarProps } from "./BottomBar.props";
import styles from "./BottomBar.module.css";
import LeftArrowIcon from "./Left-chevron.svg";
import RightArrowIcon from "./Right-chevron.svg";
import { Wrapper } from "@/shared/Wrapper/Wrapper";
import { Container } from "@/shared/Container/Container";

export const BottomBar: FC<BottomBarProps> = ({ ...props }): ReactElement => {
  return (
    <>
      <div {...props} className={styles.bottomBar}>
        <Wrapper direction='row'>
          <Container variant='row-center'>
            <div className={styles.message}>
              <LeftArrowIcon />
              <span>
                <b>Up to 70% Off. </b>Shop our latest sale styles
              </span>
              <RightArrowIcon />
            </div>
          </Container>
        </Wrapper>
      </div>
    </>
  );
};
