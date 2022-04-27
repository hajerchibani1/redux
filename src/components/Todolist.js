import React from "react";
import { useSelector } from "react-redux";
import Addtodo from "./Addtodo";
import Todoitem from "./Todoitem";
const Todolist = () => {
  const todos = useSelector((state) => state.todo.todolist);
  return (
    <div className="todo-list">
      <Addtodo />
      {todos.map((todo) => (
        <Todoitem todo={todo} />
      ))}
    </div>
  );
};

export default Todolist;
