import React, { useContext } from 'react';
import { contextoEnvoltorio } from './UnContexto';

export default function Hijo() {
  const user = useContext(contextoEnvoltorio);

  return (
    <>
      <h1>Componente hijo</h1>
      {user && <p>Hola {user.nombre}</p>}
    </>
  );
}
