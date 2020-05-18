import React, { useContext } from "react";
import { CovidContext } from "../context/CovidContext";
export const CovidHome = () => {
  const { Data } = useContext(CovidContext);

  return (
    <div className="container">
      <div className="active">
        <div className="card center  grey darken-4 white-text">
          <h1 className="card-title">{Data.country}</h1>
          <h5 className="card-element ">
            {" "}
            infected People <span>{Data.total_cases}</span>
          </h5>
          <h5 className="card-element  ">
            Deaths <span className="red-text">{Data.total_deaths}</span>
          </h5>
          <h5 className="card-element  ">
            Recovered <span className="green-text">{Data.total_recovred}</span>
          </h5>
        </div>
      </div>
    </div>
  );
};
