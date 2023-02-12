import React, { useState } from "react";
import classes from "./CustomItem.module.css";

import {
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

type Props = {};

const CustomItem: React.FC<{
  todo: Todo;
  deleteItem: deleteItem;
  toggleItem: toggleItem;
  enterEditMode: enterEditMode;
}> = ({ todo, deleteItem, toggleItem, enterEditMode }) => {
  const [isChecked, setIsChecked] = useState(todo.checked);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    toggleItem(todo.id);
  };
  return (
    <li className={classes.task}>
      <div className={classes["task-group"]}>
        <input
          type="checkbox"
          className={classes.checkbox}
          checked={isChecked}
          onChange={handleCheckboxChange}
          name={todo.name}
          id={todo.name}
        />
        <label htmlFor={todo.name} className={classes.label}>
          {todo.name}
          <p className={classes.checkmark}>
            <CheckIcon />
          </p>
        </label>
      </div>
      <div className={classes["task-group"]}>
        <button
          className="btn"
          aria-label={`Update ${todo.name} Task`}
          onClick={() => enterEditMode(todo)}
        >
          <PencilSquareIcon />
        </button>
        <button
          className={`btn ${classes.delete}`}
          aria-label={`Delete ${todo.name} Task`}
          onClick={() => deleteItem(todo.id)}
        >
          <TrashIcon />
        </button>
      </div>
    </li>
  );
};

export default CustomItem;
