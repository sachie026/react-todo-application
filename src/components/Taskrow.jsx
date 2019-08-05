import React, { Component } from "react";
import Taskfooter from "./Taskfooter";

export default class Taskrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFooter: false
    };
  }

  toggleFooter = () => {
    console.log("this.state.showFooter : ", this.state.showFooter);
    this.setState({
      showFooter: !this.state.showFooter
    });
  };

  render() {
    const timeInfo = { day: "Friday", month: "Jan" };
    const show = false;
    return (
      <div>
        <div class="task-row">
          <div class="task-label">{this.props.taskLabel}</div>
          <div class="task-delete">
            <span class="task-delete-icon" onClick={this.toggleFooter}>
              -
            </span>
          </div>
        </div>
        <Taskfooter
          show={this.state.showFooter}
          timeLabel={timeInfo.day}
          dayLabel={timeInfo.month}
        />
      </div>
    );
  }
}
