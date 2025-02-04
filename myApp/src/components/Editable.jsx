import { useState } from "react";

function Editable() {
  const [value, setValue] = useState("Click to Edit");
  const [isEditing, setIsEditing] = useState(false);

  const styles = {
    padding: "15px 15px",
    border: "1px dotted rgba(0,0,0,0.5)",
    "box-shadow": "1px 2px 10px",
    "border-radius": "10px",

    input: {
      border: "none",
      padding: "10px",
      "font-size": 1 + "rem",
      outline: "none",
    },
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setIsEditing(false)} // Exit edit mode when focus is lost
          autoFocus
          style={styles.input}
        />
      ) : (
        <span onClick={() => setIsEditing(true)} style={styles}>
          {value}
        </span>
      )}
    </div>
  );
}

export default Editable;
