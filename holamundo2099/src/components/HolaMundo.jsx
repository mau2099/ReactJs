import React from "react";

const HolaMundo = () => {
  const hello = "Hola Mundo";
  const isTrue = true;
  return (
    <div className="HolaMundo">
      <h1>{hello}</h1>
      <h2>Curso Esencial de React</h2>
      <img src="https://i.ytimg.com/vi/dX28fhN7jmw/maxresdefault.jpg" width="250px" alt="React" />
      {isTrue ? (
        <h4>Esto es Verdadero</h4>
      ) : (
        <h5>Esto es completamente falso</h5>
      )}

      {
          isTrue && <h4>Soy verdadero con if sin false</h4>
      }
    </div>
  );
};

export default HolaMundo;
