//# FORMULARIOS:
//+ Los formularios son un aspecto importante en toda pagina web.
//+ Estos se pueden hacer con SOLO HTML, con HTML y JS y tambien con REACT.

import { useState, Component } from "react";

//.input:
//+ Los formularios contienen campos, que se representan generalmente con elementos inputs, los cuales tienen varios tipos.

//$ Observar el valor por consola:
export function Input() {
  return (
    <div>
      <input
        type="text"
        placeholder="escriba aqui"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
}

//$ Observar el valor por consola con estados

export function InputConEstado() {
  const [valor, cambiarValor] = useState("");

  ///sin desestructuracion:
  // const renderizarInput = (e) => {
  //   cambiarValor(e.target.value);
  // };

  ///con desestructuracion:
  const renderizarInput = ({ target }) => {
    cambiarValor(target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="escriba aqui"
        value={valor}
        onChange={renderizarInput}
      />
      <p>{valor}</p>
    </div>
  );
}

//.Formularios:

export function Formulario() {
  const [nombre, cambiarNombre] = useState("");
  const [apellido, cambiarapellido] = useState("");

  ///con desestructuracion:
  const renderizarNombre = ({ target }) => {
    cambiarNombre(target.value);
  };

  const renderizarApellido = ({ target }) => {
    cambiarapellido(target.value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={renderizarNombre}
      />
      <input
        type="text"
        placeholder="Apellido"
        value={apellido}
        onChange={renderizarApellido}
      />
      <p>Nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
      <button>ENVIAR INFORMACION</button>
    </form>
  );
}

//. Modularizar formulario:

function Campo({ tipo }) {
  const [campo, cambiarCampo] = useState("");
  const renderizarCampo = ({ target }) => {
    cambiarCampo(target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder={tipo}
        value={campo}
        onChange={renderizarCampo}
      />
      <p>
        {tipo}: {campo}
      </p>
    </>
  );
}

export function FormularioModularizado() {
  return (
    <form>
      <h1>Formulario Modularizado</h1>
      <Campo tipo="Nombre" />
      <Campo tipo="Apellido" />
      <Campo tipo="Direccion" />
    </form>
  );
}

//$ Formularios con clases:




export class FormularioClase extends Component {
  constructor(props) {
    super(props);
    this.state = { nombre: "" };
  }

  onChange = (evento) => {
    this.setState({ nombre: event.target.value });
  };

  onSubmit = (evento) => {
    alert("Formulario envia: " + this.state.nombre);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={this.state.nombre}
            onChange={this.onChange}
          />
          {
            // <textarea
            //     type="text"
            //     name="nombre"
            //     value={this.state.nombre}
            //     onChange={this.onChange}
            // />
          }
          {
            // <select
            //     name="nombre"
            //     value={this.state.nombre}
            //     onChange={this.onChange}
            // >
            //     <option value="Xavier">Xavier</option>
            //     <option value="Alejandro">Alejandro</option>
            // </select>
          }
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
