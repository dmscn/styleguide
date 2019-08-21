import React from "react";
import cn from "classnames";
import styled from "styled-components";

export interface Props {
  variant?: "primary" | "disabled";
  value: string;
  autofocus?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const commonClasses =
  "input-reset mt1 outline-0 ba bw0 bg-transparent helvetica black-60";

const variants = {
  primary: "bg-washed-pink",
  disabled: ""
};

const TextField = styled.input.attrs((props: Props) => {
  const { variant = "primary", autofocus = true, ...rest } = props;

  return {
    type: "text",
    className: cn(commonClasses, variants[variant]),
    autofocus,
    ...rest
  };
})<Props>``;

export default TextField;
