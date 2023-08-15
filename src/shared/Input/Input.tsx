import React, { FC, ReactElement } from "react";
import { InputProps } from "./Input.props";
import classNames from 'classnames';
import styles from './Input.module.css';

export const Input: FC<InputProps> = ({ className,appearance,...props }): ReactElement => {
  return (
    <>
      <input type="text" {...props} className={classNames(styles.input, className, {
        [styles.headerInput]:appearance == 'header-input',
        [styles.subscribeInput]:appearance == 'subscribe-input'
      })}/>
    </>
  );
};
