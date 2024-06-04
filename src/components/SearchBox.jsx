import React from "react";

const SearchBox = (props) => {
  // search buttonudu, inputdaki deyeri setsearchvalue-ye setleyir, ve icindeki deyeri propsla oturur
  return (
    <div className="input-container">
      <form>
        <input
          onChange={(event) => props.setSearchValue(event.target.value)}
          value={props.value}
          type="text"
          placeholder="Write name of the film..."
        />
      </form>
    </div>
  );
};

export default SearchBox;
