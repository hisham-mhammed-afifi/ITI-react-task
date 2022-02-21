import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { Col, Container, Row } from "react-bootstrap";
import MovieLoading from "./MovieLoading";
import Paginate from "../shared/Paginate";
import Search from "../shared/Search";
import MovieCard from "./MovieCard";

function MovieApp() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const onNext = () => {
    setPage(page + 1);
  };

  const onPrev = () => {
    page > 1 ? setPage(page - 1) : setPage(page);
  };

  const search = (e) => {
    setIsLoading(true);
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=19bded5488fa21f4e91959b20273d9fa",
        {
          params: {
            query: e.target.value,
          },
        }
      )
      .then(({ data }) => {
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const debounceSearch = useCallback(debounce(search, 500), []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=19bded5488fa21f4e91959b20273d9fa",
          { params: { page } }
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
  }, [page]);
  return (
    <Container>
      <Row>
        <Search onChange={(e) => debounceSearch(e)} />
      </Row>
      <Row>
        <Paginate next={onNext} prev={onPrev} />
      </Row>
      <Row xs={2} md={3} lg={4} className="g-4 mt-2">
        {!isLoading ? (
          !isLoading &&
          movies.map((m) => {
            return (
              <Col key={m.id}>
                <MovieCard
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
    </Container>
  );
}

export default MovieApp;

// {`https://api.themoviedb.org/3/movie/${m.id}?api_key=19bded5488fa21f4e91959b20273d9fa`}
