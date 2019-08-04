import React, { Component } from "react";
import Taskrow from "./Taskrow";

export default class Tasklist extends Component {
  render() {
    return (
      <div class="task-list">
        <Taskrow />
        <Taskrow />
        <Taskrow />
        <Taskrow />
        <Taskrow />
      </div>
    );
  }
}
