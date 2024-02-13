//#  UseRef:
//+ useRef te acceder a un valor que no es necesario para el renderizado, y usarlo como referencia para algun proposito
//+ Permite establecer referencias a elementos de la interfaz con lógica de JavaScript.
//+ No dispara una nueva renderización cuando su valor cambia.
//+ Es útil para mantener valores que no afectan la representación visual del componente.

//+ Virtudes de useRef:
//• Puedes almacenar información entre renderizados (a diferencia de las variables regulares, que se reinician en cada renderizado).
//• Si se cambia no se desencadena un renderizado (a diferencia de las variables de estado, que desencadenan un renderizado).
//• La información es local para cada copia de tu componente (a diferencia de las variables externas, que son compartidas).

//+ ¿Cuando es util?
/// Si Vamos a trabajar con un valor, pero este no se va a mostrar al usuario, entonces usamos useRef
/// Si Vamos a trabajar con un valor, pero este si se va a mostrar al usuario, entonces no usamos useRef

//- SINTAXIS 1:--> let/var/const referencia = useRef(valor inicial);
//- SINTAXIS 2:--> referencia.current
/// "valor inicial" se ignora después del renderizado inicial

//* DEPENDIENDO EL TIPO DE DATO QUE VAMOS A MUTAR  DEBEMOS ASIGNAR UN TIPO DE DATO IGUAL AL VALOR INICIAL!!
//* Es importante asignar al menos, un valor inicial y no dejarlo vacio.

//+ Por EJ: Si vamos a mutar un [numero] y asignamos un [string]:-> useRef("string"), cuando mute resultara en "NaN"
//+ Por EJ: Si vamos a mutar un [string] y no asignamos [nada]  :-> useRef(), cuando mute resultara en "undefined".

/// useRef tiene una propiedad llamada "current" ,  en donde se almacenan los datos de la referencia.
/// Cuando se usa ref.current en un elemento, obtienes el objeto real al que el ref está haciendo referencia.

import { useRef } from "react";

// export default function referenciaPrueba() {
//   const referencia = useRef(0);
//   const aumentar = () =>  {console.log(`referencia: ${referencia.current++}`)};
//   const disminuir = () => {console.log(`referencia: ${referencia.current--}`)};

//   console.log("Solo me voy a mostrar al inicio ☺") /// esto solo se muestra una vez  no cada ez que apretamos un boton, con useState se mostraria en CADA click
//   return (
//     <div>
//       <h2>mira la info por consola ☺</h2>
//       <button onClick={aumentar}>AUMENTAR useRef</button>
//       <button onClick={disminuir}>DISMINUIR useRef</button>
//     </div>
//   );
// }

//. atributo ref:
//+ El atributo ref en React se puede utilizar para referenciar cualquier elemento del DOM.

//_ Ejemplo 1:
// export default function InputReferenciado() {
//   const inputReference = useRef("Primer render, esperando cambios");

//   console.log(inputReference)

//   const handleButtonClick = () => {
//     console.log(`Input Reference: ${inputReference}`);            /// Input Reference: [object Object]
//     console.log(`Input Current: ${inputReference.current}`);      /// Input Current: [object HTMLInputElement]
//     console.log(`Input Value: ${inputReference.current.value}`);  /// Input Value: asdqwe123
//   };

//   return (
//     <div>
//       <h3>Mira los valores por consola ☺</h3>
//       <input
//         type="text"
//         ref={inputReference}
//       />
//       <button onClick={handleButtonClick}>Obtener Valores</button>
//     </div>
//   );
// }

//_ Ejemplo 2:
export default function ElementosReferenciados() {
  const div = useRef("Primer render, div");
  const titulo = useRef("Primer render, titulo");
  const parrafo = useRef("Primer render, parrafo");

  console.log(div);
  console.log(titulo);
  console.log(parrafo);

  const handleButtonClick = () => {
    console.log(div.current);
    console.log(titulo.current);
    console.log(parrafo.current);
  };

  return (
    <>
      <h3>Mira los valores por consola ☺</h3>
      <div ref={div}>
        <h4 ref={titulo}>TITULO REFERENCIADO</h4>
        <p ref={parrafo}>Parrafo referenciado</p>
      </div>

      <button onClick={handleButtonClick}>Ver referencias</button>
    </>
  );
}
