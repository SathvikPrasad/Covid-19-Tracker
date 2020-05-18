import React, { useContext, useState } from "react";
import { CovidContext } from "../context/CovidContext";

export const SearchForm = () => {
  const [input, setinput] = useState("");
  const { Search, loading } = useContext(CovidContext);
  const handelchange = (e) => {
    setinput(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    Search(input);
    setinput("");
  };
  return (
    <div className="container ">
      <div className="center">
        <h3 className="white-text">Corona Virus Tracker</h3>
      </div>
      <div className="form">
        <form onSubmit={handelSubmit}>
          <label>country</label>
          <input
            type="text"
            onChange={handelchange}
            value={input}
            className="white-text"
          />
          <div className="center">
            <input type="submit" className="btn grey" />
          </div>
        </form>
      </div>
      <div className="center white-text">
        {loading ? <h4>Loading...</h4> : <h6> </h6>}
      </div>
    </div>
  );
};
