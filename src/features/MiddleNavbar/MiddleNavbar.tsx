import React, { FC, ReactElement } from "react";
import { MiddleNavbarProps } from "./MiddleNavbar.props";
import styles from "./MiddleNavbar.module.css";
import { Wrapper } from "@/shared/Wrapper/Wrapper";
import { Container } from "@/shared/Container/Container";
import LogoIcon from "./logo.svg";
import Link from "next/link";
import { Input } from "@/shared/Input/Input";
import { InputGroup } from "@/shared/InputGroup/InputGroup";
import SearchIcon from "./search.svg";
import WishlistIcon from "./outline.svg";
import CartIcon from "./cart.svg";

export const MiddleNavbar: FC<MiddleNavbarProps> = ({
  ...props
}): ReactElement => {
  return (
    <>
      <div {...props} className={styles.middleNavbar}>
        <Wrapper direction='row'>
          <Container variant="row-space-between">
            <div className={styles.left}>
              <div className={styles.logo}>
                <LogoIcon className={styles.logoIcon}/>
              </div>
              <nav className={styles.nav}>
                <ul className={styles.list}>
                  <li>
                    <Link className={styles.link} href="">
                      Women
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="">
                      Men
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="">
                      Girls
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="">
                      Boys
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.link} href="">
                      Sale
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.right}>
              <InputGroup className={styles.inputGroup}>
                <Input
                  type="text"
                  appearance="header-input"
                  placeholder="Search for products..."
                />
                <SearchIcon className={styles.searchIcon}/>
              </InputGroup>
              <div className={styles.info}>
                <div className={styles.wishlist}>
                  <WishlistIcon className={styles.wishlistIcon}/>
                  <span className={styles.badge}></span>
                </div>
                <div className={styles.cart}>
                  <CartIcon className={styles.cartIcon}/>
                  <span className={styles.badge}></span>
                </div>
              </div>
            </div>
          </Container>
        </Wrapper>
      </div>
    </>
  );
};
