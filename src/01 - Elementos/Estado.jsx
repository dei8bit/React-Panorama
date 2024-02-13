//# Estado:
//+ Los componentes en react pueden tener estados, estos reflejan determinados valores en un momento preciso.
//+ Los etados en react se manejan con diferentes funciones llamadas HOOKS (ganchos).
//+ Estos estados son los que permiten que REACT renderize elementos, de lo contrario no se renderizan.
//+ Cuando se renderiza un componente padre los hijos se re-renderizan independientemente de si hallan cambiado.

//. USESTATE
//+ UseState es un hook para manejar el cambio de estado en componentes funcionales.
//* Es obligatorio importarlo desde react para usarlo.
//* Se debe usar dentro del cuerpo de la funcion.
//* CADA ESTADO ES UNICO !! SI ESTE CAMBIA, CAMBIA EN TODOS LOS LUGARES DONDE SE LO USE!!
//+ consta de dos partes: una variable para el valor y otra para una funcion que actualiza este valor.
//* El estado inicial se inicializa UNA SOLA VEZ y nunca MAS!!
//- SINTAXIS :--> const [valor, funcionParaValor] = useState(Valor de estado Inicial Opcional);

import { useState } from "react";

//$ Un Estado en un solo componente:

export function Contador() {
  const [valor, actualizarValor] = useState(0);

  return (
    <div>
      <h1>{valor}</h1>
      <button onClick={() => actualizarValor(valor - 1)}>Restarle 1</button>
      <button onClick={() => actualizarValor(valor + 1)}>Sumarle 1</button>
    </div>
  );
}

//$ Varios Estados en varios un Componente:

const Estado1 = () => {
  const [valor, actualizarValor] = useState(0);
  return (
    <div>
      <h1>Estado 1:</h1>
      <h2>{valor}</h2>
      <button
        onClick={() => {
          actualizarValor(valor + 1);
        }}
      >
        SUMAR 1
      </button>
      <button
        onClick={() => {
          actualizarValor(valor - 1);
        }}
      >
        RESTAR 1
      </button>
    </div>
  );
};

function Estado2() {
  const [valor, actualizarValor] = useState(0);
  return (
    <div>
      <h1>Estado 2:</h1>
      <h2>{valor}</h2>
      <button
        onClick={() => {
          actualizarValor(valor + 1);
        }}
      >
        SUMAR 1
      </button>
      <button
        onClick={() => {
          actualizarValor(valor - 1);
        }}
      >
        RESTAR 1
      </button>
    </div>
  );
}
/// Como se puede observar los nombres de la funcion useState no necesitan ser unicos, puesto que viven dentro de la funcion.

export function Contadores() {
  return (
    <>
      <Estado1 />
      <Estado2 />
    </>
  );
}

//$ Estado inicial pasado como props:
//+ Es un standard llamar a esta prop con el prefijo "initial"... 

export const EstadoComoProp = ({ textoInicial }) => {
  const [texto] = useState(textoInicial)
  return (
    <div>{texto}</div>
  )
}

