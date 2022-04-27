import React from "react";

const Todoitem = ({ todo }) => {
  return (
    <div className={`"todo-item"  ${todo.isDone ? "done" : "notdone"}`}>
      <div className="text">
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
      </div>

      <span> {todo.isDone ? "done" : "not done"}</span>
    </div>
  );
};

export default Todoitem;
