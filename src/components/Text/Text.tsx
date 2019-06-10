import React, { ReactNode } from "react";
import cn from "classnames";
import styled from "styled-components";

export interface Props {
  variant?: "body" | "title" | "subtitle";
  disabled?: boolean;
  children?: ReactNode;
}

const commonStyle = "black-70 helvetica";

const tachyons = {
  body: "f6 fw6",
  title: "",
  subtitle: ""
};

const Text = styled.span.attrs((props: Props) => {
  const { variant = "body" } = props;

  return {
    className: cn(commonStyle, tachyons[variant])
  };
})<Props>``;

export default Text;
