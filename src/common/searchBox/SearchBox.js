import React from "react";
import "./SearchBox.css";

const SearchBox = ({ value, onChange, placeholder, search }) => {
  return (
    <div
      className="input-group pl-2 col-md-12"
      style={{
        borderRadius: "50%",
      }}
    >
      <input
        className="form-control  border pl-0"
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <div className="input-group-append">
        <button className="btn btn-secondary" type="button" onClick={search}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
