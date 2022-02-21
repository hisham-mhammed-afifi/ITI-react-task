import React from "react";
import { BsSearch } from "react-icons/bs";

function Search({ onChange }) {
  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">
        <BsSearch />
      </span>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        className="form-control"
        placeholder="Search for ..."
      />
    </div>
  );
}

export default Search;
