//# useMemo:
//+ useMemo es un hook de React que se utiliza para memoizar valores computados, lo que significa que puede ayudar a evitar cálculos innecesarios en cada renderizado. Aquí tienes un ejemplo sencillo y didáctico

//i! La diferencia entre useCallback y useMemo es que:p
//• useCallback devuelve LA FUNCION
//• useMemo devuelve EL VALOR DEL RETORNO DE LA FUNCION.

//- SINTAXIS:--> let/var/const memo = useMemo(funcion,[dependencia1,...,dependenciaN°])

//+ useMemo solo se va disparar cuando no haya ninguna dependencia o cuando muten los valores indicados en las dependencias.

import { useState, useMemo } from "react";



//_ Ejemplo 1:

const Sumador = ({ numeros }) => {
  // Memoizamos la función calcularSuma
  const calcularSuma = useMemo(() => {
    console.log('Calculando suma...');
    return () => numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  }, [numeros]);

  const suma = calcularSuma();

  return (
    <div>
      <p>La suma es: {suma}</p>
    </div>
  );
};

const UseMemo = () => {
  const [numeros, setNumeros] = useState([1, 2, 3, 4, 5]);

  return (
    <div>
      <Sumador numeros={numeros} />
      <button onClick={() => setNumeros([...numeros, Math.floor(Math.random() * 10)])}>
        Agregar Número Aleatorio
      </button>
    </div>
  );
};

export default UseMemo;
