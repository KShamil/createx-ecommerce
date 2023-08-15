import React, { FC, ReactElement } from "react";
import { ButtonProps } from "./Button.props";
import classNames from "classnames";
import styles from "./Button.module.css";

export const Button: FC<ButtonProps> = ({
  className,
  appearance,
  children,
  ...props
}): ReactElement => {
  return (
    <>
      <button
        {...props}
        className={classNames(styles.button, className, {
          [styles.transparentBtn]: appearance == "transparent-btn",
          [styles.primaryBtn]: appearance == "primary-btn",
          [styles.infoBtn]: appearance == "info-btn",
          [styles.subscribeBtn]: appearance == "subscribe-btn",
          [styles.ghostBtn]: appearance == "ghost-btn",
        })}
      >
        {children}
      </button>
    </>
  );
};
