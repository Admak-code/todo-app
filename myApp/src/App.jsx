import { useState } from "react";
import Button from "./components/Button";
import { TodoItem } from "./components/TodoItem";
import InfoModal from "./components/InfoModal";
import "./App.css";

function App() {
  const isUnderMaintenance = true;

  const [inputValue, setInputValue] = useState("");
  const [items, setItem] = useState([]);
  const [isCompleted, setCompleted] = useState({});
  const [showModal, setShowModal] = useState(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addnewitem = () => {
    inputValue.trim() !== "" ? setItem([...items, inputValue]) : "";
    setInputValue("");
    // console.log(items);
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItem(updatedItems);
  };

  const handleKeyPress = (event) => {
    event.key === "Enter" ? addnewitem() : null;
  };

  const handleToggle = (index) => {
    setCompleted((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));

    //  console.log(isCompleted);
  };

  const editItem = (index, editedText) => {
    const updatedItems = [...items];
    updatedItems[index] = editedText;
    setItem(updatedItems);
  };

  if (isUnderMaintenance) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center p-4 bg-gray-100">
        <h1 className="text-3xl font-bold text-red-600">
          🚧 Site Under Maintenance 🚧
        </h1>
        <p className="text-gray-700 mt-2">
          We’re making some improvements. Please check back later!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="containers">
        {showModal && <InfoModal onClose={() => setShowModal(false)} />}
        <h1 id="todotitle" className="text-3xl font-medium font-mono">
          Todo App
        </h1>
        <div className="input-section">
          <input
            type="text"
            pattern=""
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Add a new task..."
            id="todoInput"
          />

          <Button className={"button"} title="Add" onClick={addnewitem} />
        </div>

        <div id="todoList">
          {items.map((item, index) => (
            <TodoItem
              text={item}
              key={index}
              onDelete={() => deleteItem(index)}
              onComplete={() => handleToggle(index)}
              checked={!!isCompleted[index]}
              onEdit={(editedText) => editItem(index, editedText)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
