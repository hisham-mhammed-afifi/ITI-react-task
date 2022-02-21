import React, { Component } from "react";

export class Progress extends Component {
  render() {
    return (
      <div className="progress my-4">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${this.props.width}` }}
        >
          {this.props.width}
        </div>
      </div>
    );
  }
}

export default Progress;
