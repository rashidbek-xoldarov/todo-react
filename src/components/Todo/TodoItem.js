import React from "react";

import "./TodoItem.css";

const TodoItem = ({ title, id, isCompleted, onDelete, onEdit, onCheck }) => {
  const deleteTodo = () => {
    onDelete(id);
  };

  const editTodo = () => {
    onEdit(id);
  };

  const checkTodo = () => {
    onCheck(id);
  };

  return (
    <li className="todos-item">
      <input
        className="todos-item-checkbox"
        defaultChecked={isCompleted}
        type="checkbox"
        onClick={checkTodo}
      />
      <h2
        className="todos-item-title"
        style={{ textDecoration: isCompleted ? "line-through" : "none" }}
      >
        {title}
      </h2>
      <button className="todos-item-del" type="button" onClick={deleteTodo}>
        ✕
      </button>
      <button className="todos-item-edit" type="button" onClick={editTodo}>
        !
      </button>
    </li>
  );
};

export default TodoItem;
