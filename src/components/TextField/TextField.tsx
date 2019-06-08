import React from "react";
import styled from "styled-components";

export interface Props {
  variant?: "primary" | "disabled";
  value: string;
  autofocus?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const variants = {
  primary: "input-reset dim ba b--black-20 pa1 helvetica",
  disabled: "input-reset ba b--black-10 pa1 helvetica"
};

const TextField = styled.input.attrs((props: Props) => {
  const { variant = "primary", autofocus = true, ...rest } = props;

  return {
    type: "text",
    className: variants[variant],
    autofocus,
    ...rest
  };
})<Props>``;

export default TextField;
