import React from "react";
import { Next, Prev } from "react-bootstrap/esm/PageItem";

function Paginate({ prev, next }) {
  const handlePrev = () => {
    prev();
  };
  const handleNext = () => {
    next();
  };
  return (
    <div className="row justify-content-between">
      <div className="col-6 col-md-3">
        <button
          onClick={handlePrev}
          type="button"
          className="btn btn-outline-dark w-100"
        >
          previous
        </button>
      </div>
      <div className="col-6 col-md-3">
        <button
          onClick={handleNext}
          type="button"
          className="btn btn-outline-dark w-100"
        >
          next
        </button>
      </div>
    </div>
  );
}

export default Paginate;
