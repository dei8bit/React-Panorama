//# EVENTOS:
//+ Asi como en JavaScript React permite que reaccionemos a diversos eventos, solo que con un cambio de sintaxis.

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

//. Eventos en linea:
//+ los eventos los podemos definir en linea (aunque no es una buena practica)
//- SINTAXIS :--> <tag evento={funcionName(){}}>...</tag> | <tag evento={()=>{}}>...</tag>

//$Ejemplo 1:
export default function Alerta() {
  return (
    <div>
      <button onClick={() => alert("Alerta!")}>Click!</button>
    </div>
  );
}
//$ Ejemplo 2:

// export default function Alerta() {
//   return (
//     <div>
//       <button onClick={function (){alert("alerta")} }>Click!</button>
//     </div>
//   );
// }

//$ Ejemplo 3:
// export default function Alerta() {
//   return (
//     <div>
//       <button onClick={function (event){console.log(event)} }>Click!</button>
//     </div>
//   );
// }

//. Eventos en variables:
//+ El callback que ejecutan los eventos puede venir desde una variable
//- SINTAXIS :--> <tag evento={handler}>...</tag>

// export default function Alerta() {
//   const alerta = () => alert("Alerta desde funcion flecha!");
//   return (
//     <div>
//       <button onClick={alerta}>Click!</button>
//     </div>
//   );
// }

// export default function Alerta() {
//   function alerta() { alert("Alerta desde funcion tradicional!")}
//   return (
//     <div>
//       <button onClick={alerta}>Click!</button>
//     </div>
//   );
// }

//. Eventos con argumentos:

//$ un solo argumento:
/// Cuando se trata de un solo argumento no es necesario especificarlo dentro del evento.

// export default function EventoClick() {
//   function infoClic(e) { console.log(e)}
//   return (
//     <div>
//       <button onClick={infoClic}>Click para ver info por consola</button>
//     </div>
//   );
// }

//$ varios argumentos:
/// Cuando se trata de varios argumentos ES NECESARIO especificarlo dentro del evento.

// export default function EventoClick() {
//   function infoClic(evento,argumento) {
//     console.log(evento)
//     console.log(argumento)
//   }
//   return (
//     <div>
//       <button onClick={(e)=>infoClic(e,"argumento pasado")}>Click para ver info por consola</button>
//     </div>
//   );
// }

//. Mover funciones fuera del scope:
//+ React permite extraer la logica y modularizarla fuera de su componente, para algun caso particular.

//$ moviendo el boton y la funcion juntos:

// function Boton() {
//   function infoClic(evento, argumento) {
//     console.log(evento);
//     console.log(argumento);
//   }
//   return (
//     <button onClick={(e) => infoClic(e, "argumento pasado")}>
//       Click para ver info por consola
//     </button>
//   );
// }

// export default function EventoClick() {
//   return (
//     <div>
//       <Boton></Boton>
//     </div>
//   );
// }

//$ moviendo el boton y la funcion separados:

// function infoClic(evento, argumento) {
//   console.log(evento);
//   console.log(argumento);
// }

// function Boton() {
//   return (
//     <button onClick={(e) => infoClic(e, "argumento pasado")}>
//       Click para ver info por consola
//     </button>
//   );
// }

// export default function EventoClick() {
//   return (
//     <div>
//       <Boton></Boton>
//     </div>
//   );
// }




//. Eventos en props:
//+ Debido a la sintaxis JSX podemos usar props para establecer uno o varios eventos.
//- SINTAXIS :--> //- SINTAXIS :--> <tag evento={props.propiedad}>...</tag>

// const alerta = () => alert("Alerta!");
// function Alerta(props) {
//   return (
//     <div>
//       <button onClick={props.manejador}>Click!</button>
//     </div>
//   );
// }

/// Luego se lo pasariamos al componente:
{
  /* <Alertador manejador={alerta} />; */
}

//. Eventos en clases:

// class Alertador extends React.Component {

//   onClick = (e) => console.log(e.type);

//   render() {
//       return (
//           <div>
//               <button onClick={this.onClick}>Click!</button>
//           </div>
//       );
//   }
// }
// ReactDOM.render(<Alertador />, document.getElementById('root'));
