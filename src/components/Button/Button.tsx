import React, { ReactNode } from "react";
import styled from "styled-components";

export interface Props {
  children?: ReactNode;
  variant: "primary" | "outline" | "disabled";
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const variants = {
  primary: "",
  outline: "f6 grow br1 ba mh1 ph2 pv1 mb2 b--blue bg-white blue helvetica",
  disabled: ""
};

const Button = styled.button.attrs(({ variant, ...rest }: Props) => ({
  className: variants[variant],
  disabled: variant === "disabled",
  ...rest
}))<Props>``;

export default Button;
