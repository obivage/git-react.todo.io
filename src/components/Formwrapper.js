import React, { useState } from "react";
import { Todoform } from "./Todoform";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
uuidv4();

export const Formwrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  return (
    <div className="Formwrapper">
      <h1>Get Things Done!</h1>
      <Todoform addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} />
      ))}
    </div>
  );
};
