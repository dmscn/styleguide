import React from "react";
import styles from "./TextField.module.css";

export interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function(props: Props) {
  return <input type="text" {...props} />;
}
