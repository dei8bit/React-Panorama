//# UseEffect:
//+ useEffect ejecuta el codigo deseado DESPUES de que el componente se renderiza. y cuando cambia alguna de las dependencias indicadas

//+ Cada vez que ocurra un cambio de estado o de propiedad el componente se va a renderizar

//+  Si solo queremos que useEffect se ejecute cuando CIERTA variable muta, debemos indicarla dentro de sus dependencias.
//- SINTAXIS:-->  useEffect(function,[dependencia1,...,dependenciaN°])

//+ ¿Cuando usar o no usar dependencias?
//• Si queremos que useEffect solo se ejecute cuando UN valor de un componente muta, lo indicamos en sus dependencias:-->  useEffect(() => {CODIGO}, [dependencia1,...,dependenciaN°]);
//• Si queremos que useEffect se ejecute solo una vez despues del primer render usamos dependencias vacias:-->             useEffect(() => {CODIGO}, []);
//• Si queremos que useEffect se ejecute CADA vez que se renderiza el componente, no usamos ninguna dependencia:-->        useEffect(() => {CODIGO}, );

import { useEffect, useState } from "react";

//. Sin dependencias:

// export default function UseEffect() {
//   const [counter, setCounter] = useState(0)
//   const [texto, setTexto] = useState("texto inicial")
//   useEffect(()=>{console.log("Esto se ejecuta en cada renderizado");});
//   return (
//     <>
//     <h2>VEAMOS</h2>
//     <input onChange={(e)=>{setTexto(e.target.value)}} type="text" value={texto} />
//       <p>{counter}</p>
//       <button onClick={()=>setCounter(counter+1)}>AUMENTAR</button>
//     </>
//   );
// }
//. con  dependencias vacias:

// export default function UseEffect() {
//   const [counter, setCounter] = useState(0)
//   const [texto, setTexto] = useState("texto inicial")
//   useEffect(()=>{console.log("Esto SOLO se ejecuta despues del primer render y nunca mas ");},[]);
//   return (
//     <>
//     <h2>VEAMOS</h2>
//     <input onChange={(e)=>{setTexto(e.target.value)}} type="text" value={texto} />
//       <p>{counter}</p>
//       <button onClick={()=>setCounter(counter+1)}>AUMENTAR</button>
//     </>
//   );
// }

//. con dependencias especificas 1:
// export default function UseEffect() {
//   const [counter, setCounter] = useState(0)
//   const [texto, setTexto] = useState("texto inicial")

//   useEffect(()=>{console.log("Me ejecuto SOLO cuando muta el {counter} ");},[counter]); // este es un efecto
//   useEffect(()=>{console.log("Me ejecuto SOLO cuando muta el {input}   ");},[texto]);   // este es otro efecto

//   return (
//     <>
//     <h2>VEAMOS</h2>
//     <input onChange={(e)=>{setTexto(e.target.value)}} type="text" value={texto} />
//       <p>{counter}</p>
//       <button onClick={()=>setCounter(counter+1)}>AUMENTAR</button>
//     </>
//   );
// }

//. con dependencias especificas 2:

export default function UseEffect() {
  const [counter, setCounter] = useState(0);
  const [texto1, setTexto1] = useState("texto 1");
  const [texto2, setTexto2] = useState("texto 2");

  useEffect(() => {
    console.log("Me ejecuto SOLO cuando mutan el {texto1 o texto 2}   ");
  }, [texto1, texto2]); // este es otro efecto

  return (
    <>
      <h2>VEAMOS</h2>
      <input
        onChange={(e) => {
          setTexto1(e.target.value);
        }}
        type="text"
        value={texto1}
      />
      <input
        onChange={(e) => {
          setTexto2(e.target.value);
        }}
        type="text"
        value={texto2}
      />
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>AUMENTAR</button>
    </>
  );
}
