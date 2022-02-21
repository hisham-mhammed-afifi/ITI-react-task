import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=19bded5488fa21f4e91959b20273d9fa`
      )
      .then(({ data }) => {
        setMovie(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.overview}</p>
            <p className="card-text">{movie.popularity}</p>
            <p className="card-text">
              <small className="text-muted">{movie.homepage}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
