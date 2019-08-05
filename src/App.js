import React, { Component } from "react";
import Tasklist from "./components/Tasklist";
import logo from "./logo.svg";
import "./App.css";
import "./assets/css/styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        "lorem ipsum lorem ipsum 1",
        "lorem ipsum lorem ipsum 2",
        "lorem ipsum lorem ipsum 3",
        "lorem ipsum lorem ipsum 4"
      ]
    };
  }

  addTaskToList() {
    this.setState({
      tasks: this.state.tasks.push("new")
    });
  }

  render() {
    return (
      <div className="App">
        <header class="tasklist-header">
          <input type="text" placeholder="Task" class="task-entry" />
          <button class="task-add" onClick={() => this.addTaskToList}>
            Add
          </button>
        </header>
        <Tasklist tasks={this.state.tasks} />
        <div class="timer-modal">Select time</div>
      </div>
    );
  }
}
