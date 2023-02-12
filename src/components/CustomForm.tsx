import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

const CustomForm: React.FC<{ AddTodo: AddTodo }> = ({ AddTodo }) => {
  const [task, setTask] = useState<Todo>({
    name: "",
    id: 0,
    checked: false,
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AddTodo({
      name: task.name,
      id: task.id + Date.now(),
      checked: task.checked,
    });
    setTask({
      name: "",
      id: 0,
      checked: false,
    });
  };
  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          name="name"
          id="name"
          className="input"
          required
          value={task.name}
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
          onChange={onChangeHandler}
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>
      <button className="btn" aria-label="Add Task" type="submit">
        <PlusIcon />
      </button>
    </form>
  );
};

export default CustomForm;
