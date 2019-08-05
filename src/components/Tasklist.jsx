import React, { Component } from "react";
import Taskrow from "./Taskrow";

export default class Tasklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks
    };
  }

  render() {
    return (
      <div class="task-list">
        {this.state.tasks.map(task => (
          <Taskrow taskLabel={task} />
        ))}
      </div>
    );
  }
}
