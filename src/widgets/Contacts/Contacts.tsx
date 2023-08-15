import React, { FC, ReactElement } from "react";
import { ContactsProps } from "./Contacts.props";
import styles from "./Contacts.module.css";
import { Wrapper } from "@/shared/Wrapper/Wrapper";
import { Htag } from "@/shared/Htag/Htag";
import { Button } from "@/shared/Button/Button";
import InstagramIcon from "./Instagram.svg";
import { contactsCardData } from "@/data/data";
import { ContactsCard } from "@/entities/ContactsCard/ContactsCard";

export const Contacts: FC<ContactsProps> = ({ ...props }): ReactElement => {
  return (
    <>
      <section {...props} className={styles.contacts}>
        <Wrapper direction="row">
          <div className={styles.container}>
            <div className={styles.info}>
              <div className={styles.title}>
                <h4>Follow us on Instagram</h4>
                <Htag tag="h2">@createx_store</Htag>
              </div>
              <Button appearance="transparent-btn" className={styles.btn}>
                <InstagramIcon />
                <span>Follow instagram</span>
              </Button>
            </div>
            <div className={styles.images}>
              {contactsCardData &&
                contactsCardData.map((item, i) => (
                  <ContactsCard key={i} data={item} />
                ))}
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};
