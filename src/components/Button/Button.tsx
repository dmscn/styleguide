import React, { ReactNode } from "react";
import cn from "classnames";
import styled from "styled-components";

export interface Props {
  children?: ReactNode;
  variant?: "primary" | "outline" | "disabled";
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const commonClasses = "f6 grow br1 ba mh1 ph2 pv1 mb2";

const variants = {
  primary: "b--blue bg-blue white helvetica",
  outline: "b--dark-pink bg-washed-red dark-pink helvetica",
  disabled: "b--black-10 bg-black-05 black-05 helvetica"
};

const Button = styled.button.attrs((props: Props) => {
  const { variant = "primary", ...rest } = props;

  return {
    className: cn(commonClasses, variants[variant]),
    disabled: variant === "disabled",
    ...rest
  };
})<Props>``;

export default Button;
