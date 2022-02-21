import React from "react";
import { Outlet } from "react-router-dom";
import Tab from "../shared/Tab";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Container from "../shared/Container";
import Tabs from "../shared/Tabs";
// import MovieApp from "./MovieApp";

function DayThree() {
  return (
    <>
      <Tabs>
        <Tab path="/daythree/movies">Movies</Tab>
        <Tab path="/daythree/actors">Actors</Tab>
        <Tab path="/daythree/notfound">Not Found</Tab>
      </Tabs>
      <Outlet />
      {/* <Container>
        <Routes>
          <Route exact path="/daythree/movies" element={<MovieApp />} />
        </Routes>
      </Container> */}
    </>
  );
}

export default DayThree;
