import "./styles.css";
import React, { useState } from "react";
import CloseIcon from "../../assets/closeIcon.js";
function Todo() {
  const [Todos, setTodos] = useState([]);
  const [Todo, setTodo] = useState("");

   const HandleSubmit = (e) => {
    e.preventDefault();
    if (Todo !== "") {
      const newTodo = {
        text: Todo,
        completed: false,
        id: Todos.length + 1,
      };
      setTodos([...Todos].concat(newTodo));
      setTodo("");
    }
  }

   const HandleDelete =  (index) => {
    const newArr = [...Todos];
    newArr.splice(index, 1);
    setTodos([...newArr]);
  }

   const HandleCheck =  (index) => {
    const newArr = [...Todos];
    let checkedObj = newArr[index];
    checkedObj = { ...checkedObj, completed: !checkedObj.completed };
    newArr.splice(index, 1, checkedObj);
    setTodos([...newArr]);
  }

  return (
    <div className="App">
      <form onSubmit={HandleSubmit}> 
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={Todo}
        />
        <button type="submit">Add</button>
      </form>

      {Todos.map((Todo, todoIndex) => (
        <div key={Todo.id} className="instruction">
          <div>
            <input type="checkBox" onInput={(e) => HandleCheck(todoIndex)} />
          </div>
          <h3 className={`${Todo.completed ? "completed" : ""}`}>
            {Todo.text}
          </h3>
          <div>
            <button
              type="button"
              className="notCompleted"
              onClick={(e) => HandleDelete(todoIndex)}
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Todo;
