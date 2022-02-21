import React, { Component } from "react";

export class HeroSection extends Component {
  render() {
    return (
      <>
        <img
          className="hero-img"
          src={`${process.env.PUBLIC_URL}/hero-img.jpg`}
        />
      </>
    );
  }
}

export default HeroSection;
