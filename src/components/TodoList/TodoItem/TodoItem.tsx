import React, { useState } from "react";
import Text from "../../Text";

export interface Props {
  item: string;
  onSelect: Function;
}

export default function TodoItem({ item, onSelect }: Props): JSX.Element {
  const [checked, setChecked]: [boolean, Function] = useState(false);

  function handleTodoCheck(event: React.MouseEvent<HTMLInputElement>) {
    setChecked(!checked);
    onSelect();
  }

  return (
    <li>
      <input
        type="checkbox"
        id={item}
        checked={checked}
        onClick={handleTodoCheck}
      />
      <label htmlFor={item}>
        <Text disabled={checked}>{item}</Text>
      </label>
    </li>
  );
}
