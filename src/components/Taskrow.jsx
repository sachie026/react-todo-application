import React, { Component } from "react";

export default class Taskrow extends Component {
  render() {
    return (
      <div class="task-row">
        <div class="task-label">task1</div>
        <div class="task-delete">
          <span class="task-delete-icon">-</span>
        </div>
      </div>
    );
  }
}
