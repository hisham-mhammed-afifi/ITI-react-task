import React, { Component } from "react";
import Btn from "../shared/Btn";

export class AboutSection extends Component {
  render() {
    return (
      <div className="row my-5">
        <div className="col-4">
          <h3 className="fs-3 text-center">About me</h3>
        </div>
        <div className="col-7">
          <p className="lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            provident molestias cum totam amet sed at omnis reiciendis, eius
            dolorum aliquam sapiente repellendus incidunt.
          </p>
          <Btn color="dark">
            <a href="./hero-img.jpg" download>
              Download Resume
            </a>
          </Btn>
        </div>
      </div>
    );
  }
}

export default AboutSection;
