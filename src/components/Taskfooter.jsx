import React, { Component } from "react";

export default class Taskfooter extends Component {
  render() {
    // const show = this.porps.show;
    return (
      <div
        class={
          this.props.show == true ? "task-footer show" : " task-footer hide"
        }
      >
        <div>{this.props.timeLabel}</div>
        <div>{this.props.dayLabel}</div>
      </div>
    );
  }
}
