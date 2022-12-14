import React from "react";

import "./Bottons.css";

const Buttons = ({ data, allTodo, isCompletedTodo }) => {
  const isCompleted = data.filter((item) => item.isCompleted === true);
  const unCompleted = data.filter((item) => item.isCompleted === false);

  return (
    <div className="todo-btn-wrapper">
      <button className="todo-btn" onClick={allTodo}>
        All({data.length})
      </button>
      <button
        className="todo-btn"
        onClick={() => {
          isCompletedTodo(isCompleted.map((item) => item.title));
        }}
      >
        Completed({isCompleted.length})
      </button>
      <button
        className="todo-btn"
        onClick={() => {
          isCompletedTodo(unCompleted.map((item) => item.title));
        }}
      >
        Uncompleted({unCompleted.length})
      </button>
    </div>
  );
};

export default Buttons;
