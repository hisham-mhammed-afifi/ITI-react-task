import React from "react";

function LoadingCard() {
  return (
    <img
      className="p-3"
      style={{ width: "100%", objectFit: "contain" }}
      src={`${process.env.PUBLIC_URL}/loading.gif`}
    />
  );
}

export default LoadingCard;
