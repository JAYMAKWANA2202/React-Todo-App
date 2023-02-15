import React from "react";
import "./TodoList.css";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <button
          className="btn"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          x
        </button>
        <li>{props.text}</li>
      </div>
    </>
  );
};
export default TodoList;
