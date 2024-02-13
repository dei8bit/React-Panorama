//#  UseReducer:
//+ useReducer se utiliza para gestionar el estado de un componente de una manera más avanzada que useState.
//+ Mientras que useState es adecuado para estados simples, useReducer es útil con estados más complejos.
//+ La función useReducer toma como argumentos un "reductor" (que especifica cómo el estado debe cambiar) y el estado inicial.
//+ Devuelve un array que contiene el estado actual y una función dispatch, que se utiliza para enviar acciones al reductor.

//- SINTAXIS : --> let/var/const [estadoActual, despachador] = useReducer(funcionReductora, estadoInicial);
//- SINTAXIS : --> const funcionReductora = (estado, accion) => {...CODIGO...}

//i! "accion" puede ser CUALQUIER VALOR DE JS
//i! "estado" puede ser CUALQUIER valor de JS y tambien contener MULTIPLES ESTADOS

//• estadoActual: Representa el estado actual que está siendo gestionado por el reductor.
//• despachador: Es una función que se utiliza para enviar acciones al reductor, lo que desencadena la actualización del estado.
//• funcionReductora: Es una función que especifica cómo el estado debe cambiar en respuesta a una acción, toma el estado actual y una acción como argumentos
//• estadoInicial: Es el estado inicial con el que se inicia el componente.

//* la funcion reductora, requiere DOS argumentos, para funcionar correctamente!!

import { useReducer } from "react";

//. un solo estado:

// //_ Ejemplo 1:

// const funcion_reductora = (estado, accion) => {
//   return estado + 1;
// };

// export default function Counter() {
//   const [state, dispatch] = useReducer(funcion_reductora,  0 )

//   return (
//     <div>
//       <h5>CONTADOR: </h5>
//       <p>Count: {state}</p>
//       <button onClick={() => dispatch()}>Incrementar</button>
//     </div>
//   );
// }

//_ Ejemplo 2.1:
//+ Aqui accion actua como un booleano

// const funcion_reductora = (estado, accion) => {
//   return accion? estado+1:estado-1
// };

// export default function Counter() {
//   const [state, dispatch] = useReducer(funcion_reductora, 0);
//   return (
//     <div>
//       <p>CONTADOR:  <b>{state}</b> </p>
//       <button onClick={() => dispatch(true)}>Aumentar</button>
//       <button onClick={() => dispatch(false)}>Disminuir</button>
//     </div>
//   );
// }

//_ Ejemplo 2.2:
//+ Aqui accion actua como un arreglo

// const funcion_reductora = (estado, accion) => {
//   switch (accion) {
//     case 0:
//       return estado + 1;
//     case 1:
//       return estado - 1;
//     default:
//       return estado;
//   }
// };

// export default function Counter() {
//   const [state, dispatch] = useReducer(funcion_reductora, 0);
//   return (
//     <div>
//       <p>CONTADOR: <b>{state}</b></p>
//       <button onClick={() => dispatch(0)}>Incrementar</button>
//       <button onClick={() => dispatch(1)}>Disminuir</button>
//     </div>
//   );
// }

//_ Ejemplo 2.3:
//+ Aqui accion actua como un objeto

// const funcion_reductora = (estado, accion) => {
//   switch (accion.operacion) {
//     case "sumarUno":
//       return estado + 1;
//     case "restarUno":
//       return estado - 1;
//     default:
//       return estado;
//   }

// };

// export default function Counter() {
//   const [state, dispatch] = useReducer(funcion_reductora, 0);
//   return (
//     <div>
//       <p>CONTADOR: <b>{state}</b></p>
//       <button onClick={() => dispatch({operacion : "sumarUno" })}>Incrementar</button>
//       <button onClick={() => dispatch({operacion : "restarUno" })}>Disminuir</button>
//     </div>
//   );
// }

//. Multiples  estados:
//+ useReducer puede tener multiples estados.


//_ Ejemplo 1:
// const funcion_reductora = (estado, accion) => {
//   switch (accion.tipo) {
//     case 'INCREMENTAR':
//       return { ...estado, [accion.contador]: estado[accion.contador] + 1 };
//     case 'DISMINUIR':
//       return { ...estado, [accion.contador]: estado[accion.contador] - 1 };
//     default:
//       return estado;
//   }
// };

// export default function Counter() {
//   const [state, dispatch] = useReducer(funcion_reductora, { valor1: 0, valor2: 0 });

//   return (
//     <div>
//       <p>CONTADOR 1: <b>{state.valor1}</b></p>
//       <div>
//         <button onClick={() => dispatch({ tipo: 'INCREMENTAR', contador: 'valor1' })}>Incrementar contador 1</button>
//         <button onClick={() => dispatch({ tipo: 'DISMINUIR', contador: 'valor1' })}>Disminuir contador 1</button>
//       </div>
//       <p>CONTADOR 2: <b>{state.valor2}</b></p>
//       <div>
//         <button onClick={() => dispatch({ tipo: 'INCREMENTAR', contador: 'valor2' })}>Incrementar contador 2</button>
//         <button onClick={() => dispatch({ tipo: 'DISMINUIR', contador: 'valor2' })}>Disminuir contador 2</button>
//       </div>
//     </div>
//   );
// }



//. otras formas de manejar la funcion reductora:
//+ El condicional Switch no es la unica forma de manejar la funcion reductora


//_ Ejemplo 1:

const reducer = (state, action) => {
  const actionHandlers = {
    'INCREMENTAR': () => ({ valor: state.valor + 1 }),
    'DECREMENTAR': () => ({ valor: state.valor - 1 }),
    'SETEAR': () => ({ valor: action.cargar }),
  };

  const actionHandler = actionHandlers[action.type] || (() => state);
  return actionHandler();
};

// Componente que utiliza useReducer
export default function Counter() {
  const [estado, despacho] = useReducer(reducer, { valor: 0 });

  return (
    <div>
      <p>Count: {estado.valor}</p>
      <button onClick={() => despacho({ type: 'INCREMENTAR' })}>Incrementar</button>
      <button onClick={() => despacho({ type: 'DECREMENTAR' })}>Decrementar</button>
      <button onClick={() => despacho({ type: 'SETEAR', cargar: 10 })}>Setear</button>

    </div>
  );
}
