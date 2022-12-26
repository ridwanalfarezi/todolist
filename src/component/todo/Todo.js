import { useState } from "react";
import "./Todo.css";
import TodoList from "../todo-list/TodoList";
import TodoCreate from "../todo-create/TodoCreate";

const Todo = () => {
  const [getTodos, setTodos] = useState([
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Sleep",
    },
    {
      id: 3,
      title: "Code",
    },
  ]);

  const eventCreateToDo = (todo) => {
    setTodos(getTodos.concat(todo));
  };

  return (
    <div>
      <h3>To Do List</h3>
      <TodoCreate onCreateToDo={eventCreateToDo} />
      <TodoList dataTodos={getTodos} />
    </div>
  );
};

export default Todo;
