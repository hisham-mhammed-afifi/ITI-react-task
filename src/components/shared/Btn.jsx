function Btn({ children, color, type, onClick }) {
  return (
    <button
      className={`btn btn-sm btn-${color} px-5`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Btn;
