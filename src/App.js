import React, { useState } from "react";

function App() {
  const boxes = [{}];
  const [color, setColor] = useState([]);

  const handleAdd = (color) => {
    const newColor = [...color];
    newColor.push(color);
    setColor(newColor);
  };
  const createBox = (e) => {
    e.preventDefault();
    const newBox = { color };
  };

  return (
    <div>
      <form onSubmit={createBox}>
        <input type="text" placeholder="Box Color Here!"></input>
        <button>Yeah!</button>
      </form>
    </div>
  );
}

export default App;
