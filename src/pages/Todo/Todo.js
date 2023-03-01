import React, { useState, useEffect } from "react";
import { Trash } from "react-bootstrap-icons";
import "./Todo.css";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  query,
  deleteDoc,
  where,
} from "firebase/firestore";
import { db } from "../../utils/firebase";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

const Todo = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const handleEvent = (e) => {
    setInputList(e.target.value);
  };

  const list = async () => {
    if (inputList.trim() === "") {
      return alert("Add Todo");
    }
    const docRef = await addDoc(collection(db, "todos"), {
      user: auth.currentUser.email, // add todo with their email
      inputList,
    });
    console.log("inputList: ", inputList);

    setItems(() => {
      return [...items, { id: docRef.id, inputList }];
    });
    setInputList("");
  };

  const deleteItem = async (id) => {
    const itemId = items[id].id;
    await deleteDoc(doc(db, "todos", itemId));
    setItems(() => {
      return items.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  // const updateItem = async (id, newValue) => {
  //   const itemId = items[id].id;
  //   await updateDoc(doc(db, "todos", itemId), {
  //     inputList: newValue,
  //   });
  //   setItems((oldItems) => {
  //     oldItems[id].inputList = newValue;
  //     return [...oldItems];
  //   });
  // };

  useEffect(() => {
    const q = query(
      collection(db, "todos"),
      where("user", "==", auth.currentUser.email)
    );
    const list = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setItems(todosArray);
    });
    return list;
  }, [auth.currentUser]);

  return (
    <>
      <div className=" main_div">
        <div className="shadow p-3 mb-5  sidbar">
          <br />
          <h1>Todo List</h1>
          <br />
          <input
            type="text"
            placeholder="Enter your list"
            value={inputList}
            onChange={handleEvent}
          />
          <button onClick={list} className="push">
            Add
          </button>
          <ul>
            {items.map((itemval, index) => {
              return (
                <div className="todo_style" key={index}>
                  <button className="btn" onClick={() => deleteItem(index)}>
                    <div className="trash">
                      <Trash />
                    </div>
                  </button>
                  {/* <button
                    className="btn"
                    onClick={() => {
                      updateItem(index, inputList);
                    }}
                  >
                    update
                  </button> */}
                  <b>{itemval.inputList}</b>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;
