import "./TodoCreate.css";
import { useState } from "react";

const TodoCreate = (props) => {
  const [getInputToDo, setInputToDo] = useState("");

  const handleInputToDo = (event) => {
    setInputToDo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 100) + 1,
      title: getInputToDo,
    };

    props.onCreateToDo(newTodo);

    setInputToDo('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" value={getInputToDo} onChange={handleInputToDo} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoCreate;
