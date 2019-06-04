import React, { useState } from "react";
import TodoItem from "./TodoItem";
import NewItem from "./NewItem";

export default function TodoList(): JSX.Element {
  const [list, setList]: [string[], Function] = useState([]);

  function addNewItem(item: string) {
    setList([...list, item]);
  }

  function removeItem(index: number) {
    setTimeout(() => {
      setList(list.filter((item, i) => index != i));
    }, 500);
  }

  return (
    <ul>
      {list.map((item, index) => (
        <TodoItem
          key={Math.random()}
          item={item}
          onSelect={() => removeItem(index)}
        />
      ))}
      <NewItem onItemCreate={addNewItem} />
    </ul>
  );
}
