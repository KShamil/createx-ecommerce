import React, { FC, ReactElement } from "react";
import { ContactsCardProps } from "./ContactsCard.props";
import styles from "./ContactsCard.module.css";
import Image from "next/image";

export const ContactsCard: FC<ContactsCardProps> = ({
  data,
  ...props
}): ReactElement => {
  const { img } = data;
  return (
    <>
      <div {...props} className={styles.contactsCard}>
        <Image src={img} alt="error" className={styles.img}/>
      </div>
    </>
  );
};
