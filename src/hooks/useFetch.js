import { useState } from "react";

export const useFetch = (url, ciudad, apiKey) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${url}?q=${ciudad}&appid=${apiKey}&lang=${"es"}`
      );
      const responseData = await response.json();
      setData(responseData);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setData(null);
      setIsLoading(false);
      setError(error.message || "Error desconocido");
    }
  };

  return {
    data,
    isLoading,
    error,
    fetchData,
  };
};
