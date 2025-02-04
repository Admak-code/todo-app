import Button from "./Button";
import Edit from "../assets/edit";
import Delete from "../assets/Delete";
import Save from "../assets/Save";
import { useState } from "react";
import "../App.css";

export const TodoItem = ({ text, onDelete, onComplete, checked, onEdit }) => {
  // console.log("Checkbox Checked State:", checked); // Debugging
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleSave = () => {
    if (editedText.trim() !== "") {
      onEdit(editedText);
    }
    setIsEditing(false);
  };

  const styles = {
    padding: "15px 15px",
    border: "1px dotted rgba(0,0,0,0.5)",
    "box-shadow": "1px 2px 10px",
    "border-radius": "10px",

    input: {
      border: ".5px solid green",
      padding: "10px",
      "font-size": 1 + "rem",
      outline: "none",
    },
  };

  return (
    <>
      <div
        className="todo-item"
        style={
          checked === true
            ? {
                backgroundColor: "#3bd01d",
                color: "white",
                fontWeight: "bold",
                borderRadius: ".5rem",
              }
            : {}
        }
      >
        <input type="checkbox" onChange={onComplete} checked={checked} />

        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)} // update the edited values in the input
            onBlur={() => setIsEditing(false)} // Exit edit mode when focus is lost
            id="todoInput"
            style={styles.input}
          />
        ) : (
          <span
            className={checked === true ? "todo-text completed" : "todo-text"}
          >
            {text}
          </span>
        )}

        {isEditing ? (
          <Button onClick={handleSave} className="button">
            <Save />
          </Button>
        ) : (
          !checked && (
            <Button
              onClick={() => {
                setEditedText(editedText);
                setIsEditing(true);
              }}
              className="button"
            >
              <Edit />
            </Button>
          )
        )}

        {/* Only show delete button when NOT editing */}
        {!isEditing && (
          <Button className="button delete-btn" onClick={onDelete}>
            <Delete />
          </Button>
        )}
      </div>
    </>
  );
};
