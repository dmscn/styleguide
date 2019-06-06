import React, { useState } from "react";
import TextField from "../../TextField";
import Button from "../../Button";

export interface Props {
  onItemCreate: Function;
}

export default function NewItem({ onItemCreate }: Props): JSX.Element {
  const [todo, setTodo]: [string, Function] = useState("");
  console.log(todo);

  function handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodo(event.target.value);
  }

  function submitTodo() {
    if (todo) {
      onItemCreate(todo);
      setTodo("");
    }
  }

  return (
    <form>
      <TextField value={todo} onChange={handleTextChange} />
      <Button onClick={submitTodo} variant={todo ? "primary" : "disabled"} />
    </form>
  );
}
