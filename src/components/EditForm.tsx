import React, { useState, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const EditForm: React.FC<{
  editedTask: Todo;
  updateTask: AddTodo;
  closeEditMode: closeEditMode;
}> = ({ editedTask, updateTask, closeEditMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState<string>(
    editedTask.name
  );

  useEffect(() => {
    const closeModalIfEscaped = (e: KeyboardEvent) => {
      e.key === "Escape" && closeEditMode();
    };

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeEditMode]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTaskName(e.target.value);
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: updatedTaskName });
  };

  const closeEditModeHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.target === e.currentTarget && closeEditMode();
  };

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={closeEditModeHandler}
    >
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            name="name"
            id="name"
            className="input"
            required
            value={updatedTaskName}
            autoFocus
            maxLength={60}
            placeholder="Enter Task"
            onChange={onChangeHandler}
          />
          <label htmlFor="task" className="label">
            Update Task
          </label>
        </div>
        <button
          className="btn"
          aria-label={`Confirm edited task to now read ${updatedTaskName}`}
          type="submit"
        >
          <CheckIcon />
        </button>
      </form>
    </div>
  );
};

export default EditForm;
