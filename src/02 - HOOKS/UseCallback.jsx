//# useCallback:
//+ Sirve para memorizar funciones previamente generadas en un componente.
//+ con esto  evitamos que la funciones dentro de un componente  se re-renderizen de nuevo al renderizarse el componente.
//+ Es importante usarlo con prudencia, debido a que no todos los componentes ameritan su uso.
//+ una forma de saber cuando usarlo es cuando NECESITAMOs que nuestro componente NO vuelva a crear una funcion nuevamente.

//i! La diferencia entre useCallback y useMemo es que:
//• useCallback devuelve LA FUNCION
//• useMemo devuelve EL VALOR DEL RETORNO DE LA FUNCION.

//- SINTAXIS:--> let/var/const callBack = useCallback(funcion,[dependencia1,...,dependenciaN°])

//+ useCallback solo se va disparar cuando no haya ninguna dependencia o cuando muten los valores indicados en las dependencias.

import { useState, useMemo, useCallback,useEffect } from "react";

//_ Ejemplo 1.1:

export default function UseCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};



//_ Ejemplo 1.2:

// export default function UseCallback() {
//   const [contador, setContador] = useState(0);

//   const doble = () => {
//     return contador * 2;
//   };

//   const callBack = useCallback(doble,[]);
//   const memo = useMemo(doble,[]);

//   // console.log("callBack: ",callBack); /// callBack:  ()=>{console.log();return contador * 2;}
//   // console.log("memo: ",memo);         /// memo:  2

//   return (
//     <>
//       <h4>contador</h4>
//       <p>{contador}</p>
//       <button
//         onClick={() => {
//           setContador(contador + 1);
//         }}
//       >
//         AUMENTAR
//       </button>
//       <button
//         onClick={() => {
//           setContador(contador - 1);
//         }}
//       >
//         RESTAR
//       </button>
//     </>
//   );
// }

//_ Ejemplo 2:


// export default function UseCallback() {
//   const [contador, setContador] = useState(0);
//   const [user, setUser] = useState();

//   const doble = () => {
//     return contador * 2;
//   };

//   const peticion = async () => {
//     const response = await fetch(
//       "https://peticiones.online/api/users" + userId
//     );
//     const json = await response.json();
//     console.log(json);
//     setUser(json);
//   };

//   useEffect(() => {
//     peticion();
//   }, []);


//   return (
//     <>
//       <h4>contador</h4>
//       <p>{contador}</p>
//       <button
//         onClick={() => {
//           setContador(contador + 1);
//         }}
//       >
//         AUMENTAR
//       </button>
//       <button
//         onClick={() => {
//           setContador(contador - 1);
//         }}
//       >
//         RESTAR
//       </button>
//     </>
//   );
// }