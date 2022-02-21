import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import DayOne from "./components/Day1/DayOne";
import DayTwo from "./components/Day2/DayTwo";
import DayThree from "./components/Day3/DayThree";
import MovieApp from "./components/Day3/MovieApp";
import Actors from "./components/Day3/Actors";
import MovieDetails from "./components/Day3/MovieDetails";
import Home from "./components/Home/Home";
import Container from "./components/shared/Container";
import NavBar from "./components/shared/NavBar";
import NotFound from "./components/shared/NotFound";
import FavoriteMovies from "./components/Day4/FavoriteMovies";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dayone" element={<DayOne />} />
            <Route path="daytwo" element={<DayTwo />} />
            <Route exact path="daythree" element={<DayThree />}>
              <Route path="" element={<Navigate to="movies" />} />
              <Route path="movies" element={<MovieApp />} />
              <Route path="movies/:id" element={<MovieDetails />} />
              <Route path="actors" element={<Actors />} />
            </Route>
            <Route path="dayfour" element={<FavoriteMovies />} />
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
