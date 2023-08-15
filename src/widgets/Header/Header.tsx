import React, { FC, ReactElement } from "react";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import { Wrapper } from "@/shared/Wrapper/Wrapper";
import { Container } from "@/shared/Container/Container";
import { TopNavbar } from "@/features/TopNavbar/TopNavbar";
import { MiddleNavbar } from "@/features/MiddleNavbar/MiddleNavbar";
import { BottomBar } from "@/features/BottomBar/BottomBar";

export const Header: FC<HeaderProps> = ({ ...props }): ReactElement => {
  return (
    <>
      <header {...props} className={styles.header}>
        <TopNavbar />
        <MiddleNavbar />
        <BottomBar />
      </header>
    </>
  );
};
