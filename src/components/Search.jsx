
import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="my-4 animate-slideInDown">
      <input
        type="text"
        name="city"
        placeholder="Enter city"
        className="p-2 rounded-l glass-bg text-white bg-slate-100 outline-none"
      />
      <button type="submit" className="p-2 rounded-r glass-bg">
        Search
      </button>
    </form>
  );
};

export default Search;
