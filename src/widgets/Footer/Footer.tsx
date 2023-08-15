import React, { FC, ReactElement } from "react";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import { Wrapper } from "@/shared/Wrapper/Wrapper";
import Link from "next/link";
import FacebookIcon from "./Facebook.svg";
import InstagramIcon from "./Instagram.svg";
import TwitterIcon from "./Twitter.svg";
import YoutubeIcon from "./YouTube.svg";
import PinterestIcon from "./pinterest.svg";
import AppStore from "./app-store.svg";
import GooglePlay from "./google-play.svg";
import HeartIcon from "./outline.svg";

export const Footer: FC<FooterProps> = ({ ...props }): ReactElement => {
  return (
    <>
      <footer {...props} className={styles.footer}>
        <Wrapper direction="row">
          <div className={styles.container}>
            <nav className={styles.nav}>
              <div className={styles.navList}>
                <span className={styles.title}>HELP</span>
                <ul className={styles.list}>
                  <li>
                    <Link href={""} className={styles.link}>
                      Delivery & returns
                    </Link>
                  </li>
                  <li>
                    <Link href={""} className={styles.link}>
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href={""} className={styles.link}>
                      Track order
                    </Link>
                  </li>
                  <li>
                    <Link href={""} className={styles.link}>
                      Contacts
                    </Link>
                  </li>
                  <li>
                    <Link href={""} className={styles.link}>
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.navList}>
                <span className={styles.title}>Shop</span>
                <ul className={styles.list}>
                  <li>
                    <Link href={""} className={styles.link}>
                      New arrivals
                    </Link>
                  </li>
                  <li>
                    <Link href={""} className={styles.link}>
                      Trending now
                    </Link>
                  </li>
                  <li>
                    <Link href={""} className={styles.link}>
                      Sales
                    </Link>
                  </li>
                  <li>
                    <Link href={""} className={styles.link}>
                      Brands
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.navList}>
                <span className={styles.title}>Get in touch</span>
                <ul className={styles.list}>
                  <li>
                    <Link href={""} className={styles.link}>
                      <b>Call:</b>(405) 555-0128
                    </Link>
                  </li>
                  <li>
                    <Link href={""} className={styles.link}>
                      <b>Email:</b>hello@createx.com
                    </Link>
                  </li>
                </ul>
                <div className={styles.socialMedia}>
                  <div className={styles.iconContainer}>
                    <FacebookIcon className={styles.icon} />
                  </div>
                  <div className={styles.iconContainer}>
                    <InstagramIcon className={styles.icon} />
                  </div>
                  <div className={styles.iconContainer}>
                    <TwitterIcon className={styles.icon} />
                  </div>
                  <div className={styles.iconContainer}>
                    <YoutubeIcon className={styles.icon} />
                  </div>
                  <div className={styles.iconContainer}>
                    <PinterestIcon className={styles.icon} />
                  </div>
                </div>
              </div>
              <div className={styles.navList}>
                <span className={styles.title}>Download our app</span>
                <div className={styles.mobileApp}>
                  <AppStore className={styles.appStore} />
                  <GooglePlay className={styles.googlePlay} />
                </div>
              </div>
            </nav>
            <div className={styles.info}>
              <div className={styles.left}>
                <span>© All rights reserved. Made with</span>
                <HeartIcon className={styles.heart} />
                <span>by Createx Studio</span>
              </div>
              <div className={styles.right}>
                <span>Go to top</span>
              </div>
            </div>
          </div>
        </Wrapper>
      </footer>
    </>
  );
};
