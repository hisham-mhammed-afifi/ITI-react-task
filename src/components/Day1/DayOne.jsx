import React, { Component } from "react";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import PortfolioSection from "./PortfolioSection";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";

export class DayOne extends Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: 1, name: "HTML & CSS", rate: "90%" },
        { id: 2, name: "Bootstrap", rate: "70%" },
        { id: 3, name: "JavaScript", rate: "80%" },
        { id: 4, name: "Angular", rate: "70%" },
        { id: 5, name: "React", rate: "50%" },
      ],
      projects: [
        { id: 1, name: "HTML & CSS" },
        { id: 2, name: "Bootstrap" },
        { id: 3, name: "JavaScript" },
        { id: 4, name: "Angular" },
        { id: 5, name: "React" },
        { id: 6, name: "React" },
      ],
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  changeName = () => {
    this.setState({ name: "changed" });
  };
  render() {
    return (
      <>
        <HeroSection />
        <AboutSection />
        <SkillsSection data={this.state.skills} />
        <PortfolioSection data={this.state.projects} />
        <FooterSection />
      </>
    );
  }
}

export default DayOne;
