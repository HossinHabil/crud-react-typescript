import React from "react";
import CustomItem from "./CustomItem";
import classes from "./CustomList.module.css";

const Customlist: React.FC<{
  items: Todo[];
  deleteItem: deleteItem;
  toggleItem: toggleItem;
  enterEditMode: enterEditMode;
}> = ({ items, deleteItem, toggleItem, enterEditMode }) => {
  return (
    <ul className={classes.tasks}>
      {items
        .sort((a, b) => b.id - a.id)
        .map((todo) => (
          <CustomItem
            key={todo.id}
            todo={todo}
            deleteItem={deleteItem}
            toggleItem={toggleItem}
            enterEditMode={enterEditMode}
          />
        ))}
    </ul>
  );
};

export default Customlist;
