import { useState } from "react";

//# Condicionales:
//+ Los condicionales como en cualquier lenguaje, pretenden optar por una u otra respuesta a partir de una condicion.
//+ En REACT estas respuetas pueden ser: strings,elementos,componentes,etc...
//+ Existen varias formas populares de utilizar condicionales con  JSX


//. Sentencia if:
//+ Podemos realizar un simple if para devolver una u otra respuesta
//- SINTAXIS: --> if (condicion) {return  respuesta true}  else {respuesta false}

//$ Ejemplo 1:

export function IF_True() {
  if (true) {
    return <h1>Respuesta true</h1>;
  }
  return <h1>Respuesta false</h1>;
}

//$ Ejemplo 2:

export function IF_False() {
  if (false) {
    return <h1>Respuesta true</h1>;
  }
  return <h1>Respuesta false</h1>;
}

//. Operador ternario:
//+ Este operador va retornar una u otra respuesta dependiendo de si sea true o false
//- SINTAXIS: --> condicion ? respuesta true : respuesta false

//$ Ejemplo 1:
function EvaluacionTernaria(props) {
  return props.condicion ? <h1>Respuesta True</h1> : <h1>Respuesta False</h1>;
}

export function CondicionalTernario1() {
  return (
    <div>
      <EvaluacionTernaria condicion={true} />
      <EvaluacionTernaria condicion={false} />
    </div>
  );
}

//$ Ejemplo 2:
//+ Quizas solo queremos retornar algo cuando se cumpla la condicion y sino no retornar nada... (Esto es lo que hace el operador and :p)

function EvaluacionTernariaTruncada(props) {
  return props.condicion ? <h1>Respuesta True</h1> : null;
}

export function CondicionalTernario2() {
  return (
    <div>
      <EvaluacionTernariaTruncada condicion={true} />
      <EvaluacionTernariaTruncada condicion={false} />
    </div>
  );
}

//. Operador and:
//+ Este operador devuelve el valor de su lado derecho ,si el lado izquierdo es true
//+ Puesto que un componente o un valor siempre es truly, entonces se renderiza si la otra condicion es true o false.
//* Si el lado izquierdo contiene el numero 0 (cero) , este es tomado como un valor truly y lo renderiza!
//- SINTAXIS: --> condicion1 && condicion2

export function CondicionalAND({ condicion }) {
  return { condicion } && <h1>Bienvenido</h1>;
}

//. uso de hoooks y props con condicionales:
//+ Los hoooks nos permiten alterar los estados de un componente, por ende sirven como condicion.


//$ Ejemplo 1:

export function Autorizacion1() {
  const [autoridad, darAutorizacion] = useState("indefinido");

  return (
    <div>
      <h2>Usted esta: {autoridad}</h2>
      <button onClick={() => darAutorizacion("autorizado")}>Autorizar</button>
      <button onClick={() => darAutorizacion("desautorizado")}>Desautorizar</button>
    </div>
  );
}

// $ Ejemplo 2:

export function Autorizacion2() {
  const [autoridad, darAutorizacion] = useState(false);

  return (
    <div>
      <h2>Usted esta: {autoridad ? "autorizado" : "desautorizado"}</h2>
      <button onClick={() => darAutorizacion(true)}>Autorizar</button>
      <button onClick={() => darAutorizacion(false)}>Desautorizar</button>
    </div>
  );
}


//$ Ejemplo 3:

export const RenderCondicional = ({ texto1, texto2 }) => {
  const [valor, setValor] = useState("inicial")
  const renderizarInput = ({ target }) => {
    setValor(target.value);
  };
  const condicion1 = valor === texto1;
  const condicion2 = valor === texto2;


  return (
    <div>
      <h3>Escriba Alguno de los textos en pantalla:</h3>
      <p><b>{texto1}</b></p>
      <p><b>{texto2}</b></p>
      <input type="text" onChange={renderizarInput} value={valor} />
      {condicion1 && <p>CORRECTO</p>}
      {condicion2 && <p>CORRECTO</p>}
    </div>
  );
};
