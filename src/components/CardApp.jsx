import React from "react";
export const CardApp = ({ dataName, func, icon, altIcon, description }) => {
  return (
    <>
      <div className="cont">
        <div className="card-pais">
          <h2>{dataName}</h2>
          <p className="temp">
            {func}
            °c
          </p>
          <figure>
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={altIcon}
            />
          </figure>
          <p className="description">{description}</p>
        </div>
      </div>
    </>
  );
};
