import React, { useState } from "react";
import TextField from "../../TextField";
import Button from "../../Button";

export interface Props {
  onItemCreate: Function;
}

export default function NewItem({ onItemCreate }: Props): JSX.Element {
  const [todo, setTodo]: [string, Function] = useState("");

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
      <TextField
        value={todo}
        onChange={handleTextChange}
        placeholder="What is on your mind?"
        autofocus
      />
      <Button onClick={submitTodo} variant={todo ? "outline" : "disabled"}>
        Add
      </Button>
    </form>
  );
}
