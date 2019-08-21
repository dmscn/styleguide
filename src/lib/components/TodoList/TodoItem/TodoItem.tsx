import React, { useState } from "react";
import Checkbox from "../../Checkbox";

export interface Props {
  item: string;
  onSelect: () => void;
}

export default function TodoItem({ item, onSelect }: Props): JSX.Element {
  const [checked, setChecked]: [boolean, Function] = useState(false);

  function toggleCheck() {
    setChecked(!checked);
    onSelect();
  }

  return (
    <li onClick={toggleCheck}>
      <Checkbox label={item} checked={checked} onClick={toggleCheck} />
    </li>
  );
}
