import { useState } from 'react'

export const useForm = () => {

  const [ciudad, setCiudad] = useState("");

  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value);
  };

  return {
    ciudad,
    handleCambioCiudad
  }
}
