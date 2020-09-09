import React, { useState } from "react";

function App() {
  const [boxes, setBoxes] = useState([]);
  const [color, setColor] = useState("");

  const createBox = (e) => {
    e.preventDefault();
    const newBoxes = boxes.slice();
    newBoxes.push(color);
    setBoxes(newBoxes);
    setColor("");
  };

  return (
    <div>
      {color}
      <form onSubmit={createBox}>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Box Color Here!"
        ></input>
        <button>Do the thing!📦</button>
      </form>
      <div style={{ display: "flex" }}>
        {boxes.map((box, i) => (
          <div style={{ background: box, width: "20px", height: "20px" }}></div>
        ))}
      </div>
    </div>
  );
}

export default App;
