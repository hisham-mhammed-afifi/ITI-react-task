import React, { Component } from "react";
import Progress from "../shared/Progress";

export class SkillsSection extends Component {
  render() {
    return (
      <div className="bg-dark text-white">
        <div className="row justify-content-center my-3">
          <div className="col-8 ">
            <h3 className="fs-1 text-center text-white mt-5">Skills</h3>
            <p className="lead text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nisi
              sed alias quo tempore soluta eaque, labore eligendi accusantium
              pariatur.
            </p>
          </div>
        </div>
        {/* another row */}
        <div className="row justify-content-center">
          <div className="col-4">
            <ul className="list-group list-group-flush text-center mt-2">
              {this.props.data.map((s) => {
                return (
                  <li key={s.id} className="list-group-item bg-dark text-white">
                    {s.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-6">
            {this.props.data.map((s) => {
              return <Progress key={s.id} width={s.rate} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsSection;
