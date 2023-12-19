import React from "react";
import { useState } from "react";
import { useForm } from "./hooks/useForm";
import { useFetch } from "./hooks/useFetch";
import { FormApp } from "./components/FormApp";
import { CardApp } from "./components/CardApp";
export const WeatherApp = () => {
  const url = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "44721493cbe5a8eaffe955e9c78db8d1";
  const diffKelvin = 273.15;

  const { ciudad, handleCambioCiudad } = useForm();

  const { data, isLoading, errors, fetchData } = useFetch(url, ciudad, API_KEY);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.length > 0) fetchData();
  };

  return (
    <>
      <div className="container">
        <h1>Aplicación del clima</h1>
        <FormApp
          onSubmit={handleSubmit}
          value={ciudad}
          onChange={handleCambioCiudad}
        />
        {isLoading ? (
          <h4>Cargando...</h4>
        ) : errors ? (
          <p>Ha ocurrido un error: {errors}</p>
        ) : (
          <CardApp
            dataName={data.name}
            func={parseInt(data?.main?.temp - diffKelvin)}
            icon={data.weather[0].icon}
            altIcon={data.weather[0].main}
            description={data.weather[0].description}
          />
        )}
      </div>
    </>
  );
};
