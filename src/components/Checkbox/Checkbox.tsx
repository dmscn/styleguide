import React, { useState } from "react";
import Text from "../Text";
import styled from "styled-components";

export interface Props {
  variant?: "primary" | "disabled";
  checked?: boolean;
  label: string;
  onClick: () => void;
}

const tachyons = {
  primary: "mr2",
  disabled: "mr2"
};

const Input = styled.input.attrs((props: Props) => {
  const { variant = "primary", checked = false, ...rest } = props;

  return {
    type: "checkbox",
    className: tachyons[variant],
    checked,
    ...rest
  };
})<Props>``;

function Checkbox(props: Props): JSX.Element {
  const { onClick, label } = props;

  return (
    <div className="flex items-center mb2">
      <Input {...props} />
      <label onClick={onClick}>
        <Text>{label}</Text>
      </label>
    </div>
  );
}

export default Checkbox;
