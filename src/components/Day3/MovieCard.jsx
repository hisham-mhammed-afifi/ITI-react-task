import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ title, posterPath, popularity, moviePath }) {
  return (
    <div className="card h-100  shadow-sm">
      <img
        style={{ height: "200px", objectFit: "cover" }}
        src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{popularity}</p>
      </div>
      <div className="card-footer">
        <Link to={moviePath} className="btn btn-sm btn-warning px-5">
          View
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
