import React, { FC, ReactElement } from "react";
import { TopNavbarProps } from "./TopNavbar.props";
import styles from "./TopNavbar.module.css";
import Link from "next/link";
import { Container } from "@/shared/Container/Container";

export const TopNavbar: FC<TopNavbarProps> = ({ ...props }): ReactElement => {
  return (
    <>
      <div {...props} className={styles.topNavbar}>
        <Container variant="row-space-between">
          <div className={styles.contact}>
            <span>
              Available 24/7 at <b>(405) 555-0128</b>
            </span>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Link className={styles.link} href={""}>
                  Delivery & returns
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.link} href={""}>
                  Track order
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.link} href={""}>
                  Blog
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link className={styles.link} href={""}>
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.options}>
            <div className={styles.lang}>
              <span>Eng / $</span>
            </div>
            <div className={styles.authorization}>
              <span>Log in / Register</span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
