import React, { useState } from "react";
import TodoList from "./TodoList";
import "./Todo.css";
import { useHistory } from "react-router-dom";

const Todo = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const history = useHistory();

  const handleEvent = (e) => {
    setInputList(e.target.value);
  };

  const list = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
      // return oldItems.concat(inputList);
    });
    setInputList("");
  };

  const deleteItem = (id) => {
    console.log("delete");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  const handleLogout = () => {
    history.push("/login");
  };

  return (
    <>
      <div className=" main_div">
        <div className="sidbar">
          <br />
          <h1>Todo List</h1>
          <br />
          div
          <input
            type="text"
            placeholder="Enter your list"
            value={inputList}
            onChange={handleEvent}
          />
          <button onClick={list} className="push">
            +
          </button>
          <ul>
            {/* <li>{inputList}</li> */}
            {items.map((itemval, index) => {
              return (
                <TodoList
                  key={index}
                  text={itemval}
                  id={index}
                  onSelect={deleteItem}
                />
              );
            })}
          </ul>
          <button onClick={handleLogout} className="logout_btn">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};
export default Todo;
