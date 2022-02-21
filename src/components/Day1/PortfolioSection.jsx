import React, { Component } from "react";
import Card from "../shared/Card";

export class PortfolioSection extends Component {
  render() {
    return (
      <>
        <h3 className="fs-1 mt-5">Portfolio</h3>
        <div className="row row-cols-3 g-3 mb-5">
          {this.props.data.map((p) => {
            return (
              <div key={p.id} className="col text-center">
                <Card>
                  <h3 className="mt-3">{p.name}</h3>
                  <p className="lead p-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Corporis, obcaecati?
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default PortfolioSection;
