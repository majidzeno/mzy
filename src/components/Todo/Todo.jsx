import "./styles.css";
import React, { useState } from "react";

function Todo() {
  const [Todos, setTodos] = React.useState([]);
  const [Todo, setTodo] = React.useState("");

  function HandleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      text: Todo,
      completed: false
    };
    setTodos([...Todos].concat(newTodo));
    setTodo("");
  }

  return (
    <div >
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={Todo}
        />
        <button type="submit">Add</button>
      </form>
      {Todos.map((Todo) => (
        <div key={Todo.id} className="instruction">
          <div>
            <input type="checkBox" className="completed" />
          </div>
          <div>{Todo.text}</div>
          <div>
            <button type="delet" className="notCompleted">
              {" "}
              <span> ❌ </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
