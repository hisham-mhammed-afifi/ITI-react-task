import React, { Component } from "react";
import Btn from "../shared/Btn";

export class FooterSection extends Component {
  render() {
    return (
      <>
        <div className="bg-dark text-white">
          <div className="container p-3">
            <div className="row justify-content-center">
              <div className="col-4 text-center">
                <p>facebook</p>
                <p>What's app</p>
                <p>Instagram</p>
              </div>
              <div className="col-4 text-center my-3">
                <Btn color="light">Keep in touch</Btn>
              </div>
              <div className="col-4 text-center">
                <p>About me</p>
                <p>Contact</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FooterSection;
