import React, { useState } from "react";
import CustomForm from "./components/CustomForm";
import CustomList from "./components/CustomList";
import EditForm from "./components/EditForm";
import { useLocalStorage } from "./hooks/useLocalStorage";

const App: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todo-item",[]);
  const [editedTask, setEditedTask] = useState<Todo>({
    name: "",
    id: 0,
    checked: false,
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const addTask: AddTodo = (task) => {
    setTodos((prev) => [...prev, task]);
    console.log(todos);
  };

  const deleteItem: deleteItem = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleItem: toggleItem = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const updateTask: AddTodo = (task) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
    closeEditMode();
  };

  const enterEditMode: enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
  };

  const closeEditMode = () => {
    setIsEditing(false);
  };

  return (
    <div className="container">
      <header>
        <h1>Todo App</h1>
      </header>
      {isEditing && (
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
      )}
      <CustomForm AddTodo={addTask} />
      <CustomList
        items={todos}
        deleteItem={deleteItem}
        toggleItem={toggleItem}
        enterEditMode={enterEditMode}
      />
    </div>
  );
};

export default App;
