import React, { FC, ReactElement } from "react";
import { InputGroupProps } from "./InputGroup.props";

export const InputGroup: FC<InputGroupProps> = ({
  children,
  ...props
}): ReactElement => {
  return (
    <>
      <div {...props}>{children}</div>
    </>
  );
};
