import React from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavorites } from "../../store/actions/addToFavorites";

function MovieCard({ id, title, posterPath, popularity, moviePath }) {
  const favoriteArr = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleFav = () => {
    if (favoriteArr.length !== 0 && favoriteArr.includes(id)) {
      const index = favoriteArr.indexOf(id);
      if (index > -1) {
        favoriteArr.splice(index, 1);
      }
      dispatch(addToFavorites([...favoriteArr]));
    } else {
      dispatch(addToFavorites([id, ...favoriteArr]));
    }
  };
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
        <Link to={moviePath} className="btn btn-sm btn-warning px-5 me-3">
          View
        </Link>
        {favoriteArr.includes(id) ? (
          <BsHeartFill className="text-danger" onClick={handleFav} />
        ) : (
          <BsHeart className="text-danger" onClick={handleFav} />
        )}
      </div>
    </div>
  );
}

export default MovieCard;
