import { useState } from "react";

export default function BackgroundSelector() {
  const [bgColor, setBgColor] = useState("white");

  const handleChange = (e) => {
    const selectedColor = e.target.value;
    document.body.style.backgroundColor = selectedColor;
    setBgColor(selectedColor);
  };

  return (
    <div className="bgr">
    <div className="op" >
      <select value={bgColor} onChange={handleChange}>
        <option value="white">Background Color</option>
        <option value="lightblue">Blue</option>
        <option value="lightgreen">Green</option>
        <option value="lightcoral">Coral</option>
        <option value="yellow">Yellow</option>
      </select>
    </div>
    </div>
  );
}
