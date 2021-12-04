import React, { useState } from "react";
import "./App.css";

const Box = ({ onPress, style }) => {
  return <div style={style} onClick={onPress} className="box" />;
};

export default function App() {
  const [checked, setChecked] = useState([]);
  let array = Array.from({ length: 16 }, () => 0);
  return (
    <div className="container">
      {array?.map((_, index) => (
        <Box
          key={index}
          onPress={() => {
            let temp = [...checked];
            if (temp.length === 2) {
              temp.shift();
            }
            if (!temp.includes(index)) setChecked([...temp, index]);
          }}
          style={{ backgroundColor: checked.includes(index) ? "red" : "blue" }}
        />
      ))}
    </div>
  );
}
