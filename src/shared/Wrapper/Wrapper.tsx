import React, { FC, ReactElement } from "react";
import { WrapperProps } from "./Wrapper.props";
import styles from "./Wrapper.module.css";
import classNames from 'classnames';

export const Wrapper: FC<WrapperProps> = ({ children,className,direction,...props }): ReactElement => {
  return (
    <>
      <div {...props} className={classNames(styles.wrapper, className, {
        [styles.row]: direction == 'row',
        [styles.column]: direction == 'column',
      })}>{children}</div>
    </>
  );
};
