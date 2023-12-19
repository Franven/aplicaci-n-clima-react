import React from "react";

export const FormApp = ({ onSubmit, ciudad, onChange }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={ciudad} onChange={onChange} />
        <button type="submit">Buscar</button>
      </form>
    </>
  );
};
