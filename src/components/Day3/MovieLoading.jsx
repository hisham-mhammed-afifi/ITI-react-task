import React from "react";
import { Col } from "react-bootstrap";
import LoadingCard from "../shared/LoadingCard";
function MovieLoading({ times }) {
  const arr = [...Array(times)];
  return (
    <>
      {arr.map((e, i) => (
        <Col key={i}>
          <LoadingCard />
        </Col>
      ))}
    </>
  );
}

export default MovieLoading;
