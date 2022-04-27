import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Addtask } from "../redux/todoSlice/TodoSlice";

const Addtodo = () => {
  const dispatch = useDispatch();
  const [task, settask] = useState({
    id: Math.random(),
    title: "",
    description: "",
    isDone: false,
  });
  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="enter the title of the task"
        onChange={(el) => {
          settask({ ...task, title: el.target.value });
        }}
      ></input>
      <input
        type="text"
        placeholder="enter the description of the task"
        onChange={(el) => {
          settask({ ...task, description: el.target.value });
        }}
      ></input>
      <button onClick={() => dispatch(Addtask(task))}> add new task</button>
    </div>
  );
};

export default Addtodo;
