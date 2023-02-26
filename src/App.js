import React, { useState } from "react";
import "./App.css";
import ColorList from "./components/ColorList";
import CreateNewColor from "./components/CreateNewColor";
import CheckBox from "./components/CheckBox";

function App() {
  const [words, setWords] = useState("Hey how are you");

  return (
    <div className="App">
      <CreateNewColor />
      <ColorList />
      <CheckBox click={() => setWords("hey" + words)}>{words}</CheckBox>
    </div>
  );
}

export default App;
