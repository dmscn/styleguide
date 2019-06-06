import React, { ReactNode } from "react";
import styled from "styled-components";
export interface Props {
  variant: "disabled" | "primary" | "outline";
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Button(props: Props): any {
  const { variant, onClick, ...rest } = props;

  const variants = {
    outline: "f6 grow br1 ba mh1 ph2 pv1 mb2 b--blue bg-white blue helvetica",
    disaled: ""
  };

  return styled.button.attrs<Props>({
    className: variants.outline
  })``;
}
