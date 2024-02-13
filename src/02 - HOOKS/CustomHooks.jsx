//# Custom HOOKS:
//+ Estos hoooks pueden contener lógica de estado, efectos, o cualquier otro código de React. 
//+ Permiten reutilizar  lógica de componentes en diferentes partes de tu aplicación.
//+ Por convencion se acostumbra colocar el prefijo "use" a nuestros custom hooks creados.

//- SINTAXIS 1:--> let/var/const useCustomHook = () => {...CODIGO...}
//- SINTAXIS 2:--> function useCustomHook(){...CODIGO...}



//_Ejemplo 1: 


import { useState } from 'react';

const useContador = (initialValue) => {
  const [contador, setContador] = useState(initialValue);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return {
    contador,
    incrementar,
    decrementar,
  };
};



export default function CustomHooks() {
  // Utilizamos nuestro custom hook
  const { contador, incrementar, decrementar } = useContador(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}


//_Ejemplo 2 
// import { useState } from 'react';

// const useStyle = () => {
//   const [style, setStyle] = useState({});

//   const rojo = () => {
//     setStyle({color:"red"});
//   };

//   const azul = () => {
//     setStyle({color:"blue"});
//   };

//   return {
//     style,
//     rojo,
//     azul,
//   };
// };


// export default function CustomHooks() {
//   const { style,rojo,azul } = useStyle();

//   return (
//     <div>
//       <p style={style}> VEAMOS</p>
//       <button onClick={rojo}>Estilo Rojo</button>
//       <button onClick={azul}>Estilo Azul</button>
//     </div>
//   );
// }

//_Ejemplo 3:

// import { useState } from 'react';

// const useDinamicColor = () => {
//   const [color, setColor] = useState('');

//   const changeColor = (newColor) => {
//     setColor(newColor);
//   };

//   return {
//     color,
//     changeColor,
//   };
// };

// export default function CustomHooks() {
//   const { color, changeColor } = useDinamicColor();
//   const [text, setText] = useState('');

//   return (
//     <div>
//       <h2 style={{ color: `${color}` }}>TITULO DINAMICO</h2>
//       <input
//         type="text"
//         value={text}
//         placeholder='ingrese colores en ingles'
//         onChange={(e) => {
//           setText(e.target.value);
//           changeColor(e.target.value);
//         }}
//       />
//     </div>
//   );
// }