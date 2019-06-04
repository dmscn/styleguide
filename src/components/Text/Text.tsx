import React, { ReactNode } from "react";
import styled from "styled-components";

export interface Props {
  disabled: boolean;
  children: ReactNode;
}

export default function Text(props: Props) {
  const { disabled = false, children } = props;
  const fontSize = "14px";
  const Span = styled.span`
    font-family: "Arial", sans-serif;
    font-size: ${fontSize};
    color: ${disabled ? "#cecece" : "#000"};
  `;
  return <Span>{children}</Span>;
}
