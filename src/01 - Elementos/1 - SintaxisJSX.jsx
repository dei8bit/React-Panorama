//# SINTAXIS JSX:
//+ JavaScript Syntax Extension and occasionally referred as JavaScript XML
//+ Extensión de sintaxis JavaScript y ocasionalmente denominada JavaScript XML
//+ JSX es una extensión de JavaScript que permite la creación de árboles DOM utilizando una sintaxis similar a XML.
//+ La sintaxis de JSX nos permite crear componentes de una forma mas declarativa y visual.

//. SINTAXIS IMPERATIVA de JavaScript:
//+ Este tipo de sintaxis pretende ordenar mas que describir.
//- SINTAXIS: --> let/var/const nombreElemento = React.createElement('elementType',{atributo:'valor'},"contenido");

// const button1 = React.createElement('button',{"data-id":1},'boton 1')
// const button2 = React.createElement('button',{"data-id":2},'boton 2')
// const button3 = React.createElement('button',{"data-id":3},'boton 3')

/// El contenido puede se un array con varios elementos ☺
// const aplicacion = React.createElement(React.Fragment,null,[button1,button2,button3]);

//. SINTAXIS JSX DECLARATIVA:
//+ Este tipo de sintaxis pretende describir mas que ordenar.
//* TODOS LOS COMPONENTES DE REACT DEBEN TENER UN SOLO ELEMENTO PADRE QUE CONTENGA TODO!!!
//- SINTAXIS: --> <etiqueta>...Elemento/s en sintaxis declarativa...</etiqueta>

/// Cualquiera de estas tres opciones devuelve el mismo resultado:

{/* <React.Fragment>
  <button data-id="1">boton 1</button>
  <button data-id="2">boton 2</button>
  <button data-id="3">boton 3</button>
</React.Fragment>; */}

{
  /* <Fragment>
  <button data-id="1">boton 1</button>
  <button data-id="2">boton 2</button>
  <button data-id="3">boton 3</button>
</Fragment>   */
}

{
  /* <>
  <button data-id="1">boton 1</button>
  <button data-id="2">boton 2</button>
  <button data-id="3">boton 3</button>
</> */
}

/// Como se puede observar el JSX declarativo es muchisimo mas facil de leer e interpretar.

//_JavaScript en JSX:
//+Para poder usar JavaScript dentro de JSX debemos indicar el codigo entre llaves {}
//- SINTAXIS: --> <etiqueta>Codigo JSX {codigo JS}</etiqueta>
const numero = 4; /// 4
const string = "hola"; /// hola
const array = [1, 2, 3, "a", "b", "c"]; /// 123abc (Se muestra todo junto, pero por consola esta separado)
const boolean = true; /// REACT no muestra los booleanos
const funcion = () => "Funcion de JavaScript"; /// Solo se muestra si se ejecuta, SINO: "Functions are not valid as a React child."
const objeto = { nombre: "Pedro", apellido: "Carlin" }; /// Error: Objects are not valid as a React child

export default function SintaxisJSX() {
  return (
    <div>
      {numero}
      <br />
      {string}
      <br />
      {array}
      <br />
      {boolean}
      <br />
      {/* {funcion} ///no anda */}
      {funcion()}
      <br />
      {/* {objeto} ///no anda */}
      {JSON.stringify(objeto)}
    </div>
  );
}

//. EQUIVALENCIAS A PALABRAS RESERVADAS DE JS:
//+ Muchas de las palabras de JS no se pueden usar directamente en REACT porque son palabras reservadas
//+ Es por esta razon que existen maneras de referirse a las mismas palabras.

// , Atributos:
// • class       --> className
// • for         --> htmlFor
// • innerHTML   --> dangerouslySetInnerHTML
// • style       --> objeto JavaScript con propiedades CSS = {atributo: 'valor',...,atributoN°:'valorN°'}
// • tabindex    --> tabIndex
// • maxlength   --> maxLength
// • readonly    --> readOnly
// • value       --> defaultValue
// • autofocus   --> autoFocus
// • checked     --> defaultChecked

// , Eventos:
// • onclick    --> onClick
// • onchange   --> onChange
// • mouseover  --> onMouseOver
// • mouseout   --> onMouseOut
// • keydown    --> onKeyDown
// • keyup      --> onKeyUp
// • focus      --> onFocus
// • blur       --> onBlur
// • load       --> onLoad
