function Card({ children }) {
  return (
    <div className="card shadow" style={{ minHeight: "250px" }}>
      {children}
    </div>
  );
}

export default Card;
