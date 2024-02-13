//# UseContext:
//+ useContext permite que cualquier componente pueda acceder a los valores de un contexto que los envuelve.
//+ Combinado con otros hooks puede mejorar mucho el rendimiento de nuestra app.
//+ React rerenderiza automáticamente los componentes que leen algún contexto si este cambia.

//+ useContext consta de 3 partes:
//• React.createContext(): Permite asignar un contexto a una variable, la cual usaremos como envoltorio.
//• Provider: Envuelve la parte de la aplicación donde los componentes tendrán acceso al contexto y proporciona los datos.
//• useContext: Permite a un componente consumir y utilizar un contexto.

//* Este hook requiere la importacion de React, a comparacion de los otros que no siempre la necesian.!!
//* El atributo value del contexto solo permite UN SOLO VALOR, que puede ser cualquier tipo de dato de JS.


//- SINTAXIS 1: --> let/var/const contexto = React.createContext();
//- SINTAXIS 2: --> <contexto.Provider value={valores} >...componentes...</contexto.Provider>
//- SINTAXIS 3: --> useContext.contexto

import React, { useState } from "react";

import Hijo from "./Hijo";

export const contextoEnvoltorio = React.createContext();

//# UN SOLO CONTEXTO:

export default function UnContexto() {
  const cambiaLogin = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({
        nombre: "pedro",
        apellido: "Estebanez",
      });
    }
  };

  const [user, setUser] = useState(null);

  return (
    <contextoEnvoltorio.Provider value={user}>
      <button onClick={cambiaLogin}>CAMBIA LOGIN</button>
      <div>
        <Hijo />
      </div>
    </contextoEnvoltorio.Provider>
  );
}



//# MULTIPLES CONTEXTOS:
