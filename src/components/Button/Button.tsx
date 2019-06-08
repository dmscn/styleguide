import React, { ReactNode } from "react";
import styled from "styled-components";

export interface Props {
  children?: ReactNode;
  variant?: "primary" | "outline" | "disabled";
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const variants = {
  primary: "f6 grow br1 ba mh1 ph2 pv1 mb2 b--blue bg-blue white helvetica",
  outline: "f6 grow br1 ba mh1 ph2 pv1 mb2 b--blue bg-white blue helvetica",
  disabled:
    "f6 grow br1 ba mh1 ph2 pv1 mb2 b--black-10 bg-black-05 black-05 helvetica"
};

const Button = styled.button.attrs((props: Props) => {
  const { variant = "primary", ...rest } = props;

  return {
    className: variants[variant],
    disabled: variant === "disabled",
    ...rest
  };
})<Props>``;

export default Button;
