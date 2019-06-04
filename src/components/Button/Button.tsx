import React, { ReactNode } from "react";
import styles from "./Button.module.css";
export interface Props {
  children: ReactNode;
  variant: "disabled" | "primary" | "outline";
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
}

export default function Button(props: Props) {
  const { children, variant, onClick } = props;

  return (
    <button className={styles[variant]} onClick={onClick}>
      {children}
    </button>
  );
}
