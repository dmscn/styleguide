import React, { useState } from "react";
import TodoItem from "./TodoItem";
import NewItem from "./NewItem";

const tachyons = {
  element:
    "flex flex-column justify-end ph4 pv1 bg-washed-red ba b--dark-pink bw1 br1"
};

export default function TodoList(): JSX.Element {
  const [list, setList]: [string[], Function] = useState([]);

  function addItem(item: string) {
    setList([...list, item]);
  }

  function removeItem(index: number) {
    setTimeout(() => {
      setList(list.filter((item, i) => index != i));
    }, 500);
  }

  return (
    <div className={tachyons.element}>
      <ul className="list pl0">
        {list.map((item, index) => (
          <TodoItem
            key={Math.random()}
            item={item}
            onSelect={() => removeItem(index)}
          />
        ))}
        <NewItem onItemCreate={addItem} />
      </ul>
    </div>
  );
}
