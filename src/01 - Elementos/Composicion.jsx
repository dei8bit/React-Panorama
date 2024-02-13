//# COMPOSICION:
//+ La composicion permite crear funcionalidades reutilizables cuando sean necesarias.
//+ Es la capacidad de construir componentes más complejos combinando varios componentes más simples. 
//+ Esto es útil ya que permite dividir una aplicación en componentes más manejables y reutilizables, 
//+ Esto facilita el desarrollo, la depuración y el mantenimiento de tu código.
//* Es deseado que los componentes hijos hereden la logica de los componentes padres!!

//$ Ejemplo 1:
// const Hijo1 = () => {
//   return (
//     <div>Hijo 1</div>
//   )
// }
// const Hijo2 = () => {
//   return (
//     <div>Hijo 2</div>
//   )
// }

// function Hijo3(props) {
//   return (
//     <div>
//       <Hijo1/>
//       <Hijo2/>
//       {props.childrem}
//     </div>
//   )
// }

// function Composicion() {
//   return (
//     <div>
//       <Hijo3/>
//     </div>
//   )
// }

// export default Composicion

//. props.children:
//+ Permite pasar componentes o elementos HTML como hijos a un componente padre. 
//+ Esto es útil cuando deseas componer componentes de manera flexible y anidar componentes dentro de otros.
//* Para hacer uso de  props.children, es necesario usar componentes con doble etiqueta  <tag>...</tag> !!

function MiComponente(props) {
  return (
    <div
      style={{
        border: "5px solid red",
        padding: "10px",
        display: "inline-block",
      }}
    >
      <h1>Titulo del padre</h1>
      <div style={{ border: "2px solid blue", display: "inline-block" }}>
        {props.children}
      </div>
    </div>
  );
}

export default function ComponentePadre() {
  return (
    <div>
      <MiComponente>
        <h2>Titulos desde el hijo</h2>
        <b>Parrafo como props.children</b>
        <p>Otro parrafo mas</p>
        <i>y podria haber muchos mas</i>
      </MiComponente>
    </div>
  );
}

//$ Ejemplo 3:


function Tarjeta(props) {
  return (
      <div>
          <h1>{props.titulo}</h1>
          <p>{props.texto}</p>
          {props.children}
      </div>
  );
}

function Seccion(props) {

  const [nombre, setNombre] = React.useState('')

  const onChange = (e) => {
      setNombre(e.target.value);
  }
  const onClick = () => {
      alert('Bienvenido ' + nombre);
  }

  return (
      <Tarjeta titulo="Academia X"
          texto="Empieza tu carrera en tecnología">
          <input onChange={onChange} />
          <button onClick={onClick}>
              Quiero estudiar!
          </button>
      </Tarjeta>
  );
}

