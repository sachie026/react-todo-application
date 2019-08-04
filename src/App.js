import React from "react";
import Tasklist from "./components/Tasklist";
import logo from "./logo.svg";
import "./App.css";
import "./assets/css/styles.css";

function App() {
  return (
    <div className="App">
      <header class="tasklist-header">
        <input type="text" placeholder="Task" class="task-entry" />
        <button class="task-add">Add</button>
      </header>
      <Tasklist />
      <div class="timer-modal">Select time</div>
    </div>
  );
}

export default App;
