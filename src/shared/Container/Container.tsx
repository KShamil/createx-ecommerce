import React, { FC, ReactElement } from "react";
import { ContainerProps } from "./Container.props";
import styles from './Container.module.css';
import classNames from 'classnames';

export const Container: FC<ContainerProps> = ({ className,children,variant,...props }): ReactElement => {
  return (
    <>
      <div {...props} className={classNames(styles.container, className, {
        [styles.containerRowSpaceBetween]:variant == 'row-space-between',
        [styles.containerRowCenter]:variant == 'row-center',
        [styles.containerRowStart]:variant == 'row-start',
        [styles.containerRowEnd]:variant == 'row-end',
      } )}>
            {children}
      </div>
    </>
  );
};
