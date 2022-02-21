import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import MovieCard from "../Day3/MovieCard";
import MovieLoading from "../Day3/MovieLoading";

function FavoriteMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const favoriteArr = useSelector((state) => state.favorites);

  const favoriteMovies = movies.filter((m) => {
    return favoriteArr.includes(m.id);
  });

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=19bded5488fa21f4e91959b20273d9fa"
        )
        .then(({ data }) => {
          setMovies(data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  return (
    <>
      <Row xs={2} md={3} lg={4} className="g-4 mt-2">
        {!isLoading ? (
          !isLoading &&
          favoriteMovies.map((m) => {
            return (
              <Col key={m.id}>
                <MovieCard
                  id={m.id}
                  title={m.title}
                  posterPath={m.poster_path}
                  moviePath={`${m.id}`}
                  popularity={m.popularity}
                />
              </Col>
            );
          })
        ) : (
          <MovieLoading times={8} />
        )}
      </Row>
    </>
  );
}

export default FavoriteMovies;
