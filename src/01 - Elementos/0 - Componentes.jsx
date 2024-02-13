//# COMPONENTES:
//+ Un componente en React es una porcion de codigo envuelto que puede utilizarse multiples veces y que puede tener logica interna.
//+ Los componentes pueden relacionarse con otros componentes y con el contexto en general.
//+ Son utiles y versatiles a la hora de crear varias estructuras similares en un proyecto.
//+ Existen componentes FUNCIONALES y componentes de CLASE.
//* Los nombres de los componentes DEBEN EMPEZAR con mayuscula --> PascalCase.
//* Los componentes DEBEN RETORNAR un solo elemento!!



//. Definir un componente:
//+ Para definir un componente basta con que establezcamos lo que este contiene dentro de una funcion

//- SINTAXIS Componente funcional: --> function Name(){return} | const Name = ()=>{<>...</>} 
//- SINTAXIS Componente de clase:  --> class Name extends React.Component {render(){return <>...</>;}}

//$ Ejemplo 1:
//* Cuando un componente retorna un solo elemento no necesita parentesis!

//, COMPONENTE FUNCIONAL:
// function Titulo() {return <h1>Titulo</h1>;}

//, COMPONENTE DE CLASE:
// class  Titulo extends React.Component{render(){return <h1>Titulo</h1>;}}

//$ Ejemplo 2:
//* Cuando un componente retorna varios elemento NECESITA parentesis!!

function VariosTitulos() {
  return (
    <div>
      <h1>Titulo 1</h1>
      <h1>Titulo 2</h1>
      <h1>Titulo 3</h1>
      <h1>Titulo 4</h1>
    </div>
  );
}

//. Usar  un componente:
//+ Para usar un componente simplemente debemos usarlo como un elemento html.
//* Es OBLIGATORIO que este componente sea el principal o este dentro del componente principal!!
//- SINTAXIS :--> <Componente></Componente> | <Componente/>

//$ Ejemplo 1:

// <VariosTitulos/> 

//$ Ejemplo 2:

// <VariosTitulos></VariosTitulos> 

//. renderizar componentes:
//+ para renderizar componentes debemos hacerlo dentro de un componente contenedor, y este a su vez dentro del componente principal

//_ Componete a renderizar:
function Titulos() {
  return (
    <div>
      <h1>TITULO 1</h1>
      <h2>TITULO 2</h2>
      <h3>TITULO 3</h3>
    </div>
  )
}

//_ Componete contenedor:
export default function Componentes() {
  return (
    <>
      <Titulos/>
      <Titulos/>
    </>
  )
}

//. Estilos:
//+ Los estilos de los componentes en React pueden otorgarse de dos formas:
//• Estilos en linea: Una "mala practica", pero funciona, deben ingresarse como un objeto entre llaves {}
//- SINTAXIS:--> <tag style={{atributo1: "valor1",..., atributoN°: "valorN°"}}>...</tag> (observese las llaves dobles {{}} )
//• Mediante clases o Selectores en archivos CSS externos
//- SINTAXIS:--> <tag className='...'>...</tag> 
//* Es importante usar clases para cada elemento y no seleccionarlos directamente por etiqeuta para evitar sobreescrituras!!
//* Es importante establecer las separaciones de varios componentes en un elemento padre y no en los componentes aislados!!

//+ La forma de usar variables dinamicas en atributos es mediante template strings:

//$ forma incorrecta:
// <img src="http://blogs/{usuarios}" /> 

//$ forma correcta:
// const url = `http://blogs/${usuarios}`;
// <img src={url} /> 