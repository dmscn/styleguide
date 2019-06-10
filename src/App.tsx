import React, { useState } from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div className="flex vh-100 justify-center items-center bg-washed-yellow">
      <TodoList />
    </div>
  );
};

export default App;
