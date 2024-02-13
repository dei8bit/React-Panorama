//# LISTAS:
//+ Hay varias formas de iterar varios items para crear una "lista" en REACT
//+ Como en JS existen varias funciones para iterar (forEach, map, etc...) podemos lograrlo de varias maneras
//+ Pero no todas las formas son ideales para REACT.
//+ Las listas son importantes en React ya que generalmente en aplicaciones vamos a recibir muchos datos desde una API externa
//+ con una lista se puede perfectamente representar muchos datos externos de diversos formatos.

//* REACT RECOMIENDA ASIGNAR UNA KEY UNICA A LAS LISTAS PARA EVITAR ESTE ERROR: "Each child in a list should have a unique "key" prop"!!
//* Esto se debe a que de lo contrario REACT no puede reconocer QUE elemento de la lista debe renderizar en vez de renderizar TODA LA LISTA!!
//* Elegir incorrectamente la key del componente ocasionara problemas de rendimiento!!
//* Cada elemento de la lista debe tener una key con un valor unico, pasado como prop!!
//* No es recomendable usar valores aleatorios ni indices en las keys!!.
//* valores aleatorios: Igualmente, no generes keys sobre la marcha, p. ej. con key={Math.random()}. Esto hará que las keys nunca coincidan entre renderizados, llevando a todos tus componentes y al DOM a recrearse cada vez. 
//* indices: Podrías estar tentado a usar el índice del elemento en el array como su key. De hecho, eso es lo que React usará si tu no especifícas una key en absoluto. Pero el orden en el que renderizas elementos cambiará con el tiempo si un elemento es insertado, borrado, o si se reordena su array. El índice como key lleva a menudo a sutiles y confusos errores.

//_ REGLAS DE LAS KEYS:
//• Las keys tienen que ser únicas entre elementos hermanos. Sin embargo, está bien usar las mismas keys para nodos JSX en arrays diferentes.
//• Las keys no tienen que cambiar o ¡eso quitará su propósito! No las generes mientras renderizas.

import { useState } from "react";

//. listar elementos:

//$ Listas con bucle for:

export function ListaFor() {
  const frutas = ['Apple', 'Banana', 'Orange', 'Mango'];
  const items = [];
  for (let i = 0; i < frutas.length; i++) {
    items.push(<li key={i}>{frutas[i]}</li>);
  }
  return <ul>{items}</ul>;
}

//$ Listas con bucle for in:

export function ListaForIn() {
  const usuario = {
    nombre: 'Mariano',
    edad: 77,
    cargo: 'Presidente'
  };
  const userDetails = [];

  for (const key in usuario) {
    userDetails.push(
      <p key={key}>
        <b>{key}:</b> {usuario[key]}
      </p>
    );
  }
  return <div>{userDetails}</div>
}



//$ Listas con bucle for of:

export function ListaForOf() {
  const corazones = ['💛', '🧡', '💚', '💙'];
  const corazonesLista = [];
  for (const corazon of corazones) {
    corazonesLista.push(<li key={corazon}>{corazon}</li>);
  }
  return <ul>{corazonesLista}</ul>;
}

//$ Listas con bucle map:

export function ListaMap() {
  const lista = ["Silicon Valley", "Mr. Robot", "Black Mirror"];
  return (
    <ul>
      {lista.map((serie) => (
        <li key={serie}>{serie}</li>
      ))}
    </ul>
  );
}


//, En caso de querer usar un fragment:
//+ Este ejemplo no funcionara porque no esta definido.
//+ pero lo importante a destacar es que asi podemos ahorrarnos envolver el <h1> y <p> dentro de un div u otra etiqueta.

// import { Fragment } from 'react';

// const lista = ArrayDeObjetos.map(item =>
//   <Fragment key={item.id}>
//     <h1>{item.name}</h1>
//     <p>{item.surname}</p>
//   </Fragment>
// );

//*  No recomendable usar la key de esta forma.:
// export default function ListaMap() {
//   const lista = ["Silicon Valley", "Mr. Robot", "Black Mirror"];
//   return (
//     <ul>
//       {lista.map((serie,i) => (
//         <li key={i}>{serie}</li>
//       ))}
//     </ul>
//   );
// }

//. listar componentes:

//$ Listas mediante props:

const libros = ["La Guerra y la paz", "Un mundo feliz", "El Principito"];
const peliculas = ["Matrix", "La Naranja Mecanica", "Amelie"];
const comidas = ["Suri ", "Cuy ", "haggis"];

function Listado({ listado }) {
  return (
    <ul>
      {listado.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function Libros() {
  return (
    <div>
      <h1>libros</h1>
      <Listado listado={libros} />
      <h1>peliculas</h1>
      <Listado listado={peliculas} />
      <h1>comidas</h1>
      <Listado listado={comidas} />
    </div>
  )
}

//$ Agregar elementos fijos a una lista:


const librosIniciales = ["La Guerra y la paz", "Un mundo feliz", "El Principito"];

function ListadoDeLibro({ listado }) {
  return (
    <ul>
      {listado.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export function LibrosFijos() {
  const [libro, agregarLibro] = useState(librosIniciales);

  const manejarClick = () => {
    agregarLibro([...libro, "libro nuevo"]);
  }

  return (
    <div>
      <h1>Libros</h1>
      <button onClick={manejarClick}>AGREGAR LIBRO</button>
      <ListadoDeLibro listado={libro} />
    </div>
  );
}

//$ Agregar elementos dinamicos a una lista:

const librosDefault = [
  "La Guerra y la paz",
  "Un mundo feliz",
  "El Principito",
];

function ListadoDeElementos({ listado }) {
  return (
    <ul>
      {listado.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export function ListaDinamicas() {
  const [libro, agregarLibro] = useState(librosDefault);
  const [inputValue, setInputValue] = useState(""); // Agrega estado para el valor del input

  const manejarClick = () => {
    if (inputValue.trim() !== "") {
      /// Verifica que el valor no esté vacío
      agregarLibro([...libro, inputValue]);
      setInputValue(""); /// Limpia el input
    }
  };

  return (
    <div>
      <h1>Libros</h1>
      <input
        type="text"
        placeholder="nombre del libro"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={manejarClick}>AGREGAR LIBRO</button>
      <ListadoDeElementos listado={libro} />
    </div>
  );
}


//$ Agregar elementos dinamicos a varias listas:

const peliculasInicial = ["Matrix", "La Naranja Mecanica", "Amelie"];
const comidasInicial = ["Suri ", "Cuy ", "haggis"];
const librosInicial = ["La Guerra y la paz", "Un mundo feliz", "El Principito",];

function Lista({ listado }) {
  return (
    <ul>
      {listado.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export function ListasDinamicas() {

  const [libro, agregarLibro] = useState(librosInicial);
  const [pelicula, agregarPelicula] = useState(peliculasInicial);
  const [comida, agregarComida] = useState(comidasInicial);

  const [inputValue, setInputValue] = useState(""); // Agrega estado para el valor del input

  const masLibros = () => {
    if (inputValue.trim() !== "") {
      agregarLibro([...libro, inputValue]);
      setInputValue(""); /// Limpia el input
    }
  };

  const masPeliculas = () => {
    if (inputValue.trim() !== "") {
      agregarPelicula([...pelicula, inputValue]);
      setInputValue(""); /// Limpia el input
    }
  };
  const masComidas = () => {
    if (inputValue.trim() !== "") {
      agregarComida([...comida, inputValue]);
      setInputValue(""); /// Limpia el input
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="elemento a agregar"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Libros</h2>
      <button onClick={masLibros}>AGREGAR LIBRO</button>
      <Lista listado={libro} />
      <h2>Pelicula</h2>

      <button onClick={masPeliculas}>AGREGAR PELICULA</button>
      <Lista listado={pelicula} />
      <h2>Comida</h2>

      <button onClick={masComidas}>AGREGAR COMIDA</button>
      <Lista listado={comida} />
    </div>
  );
}

//$ mejorando la logica previa.


const objetoLibros = {
  libros: ["La Guerra y la paz", "Un mundo feliz", "El Principito"],
  peliculas: ["Matrix", "La Naranja Mecanica", "Amelie"],
  comidas: ["Suri", "Cuy", "haggis"]
};

function ListasVarias({ listado }) {
  return (
    <ul>
      {listado.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export function ListasDinamicas2() {
  const [elementos, agregarElemento] = useState(objetoLibros);
  const [inputValue, setInputValue] = useState("");

  const masElemento = (tipo) => {
    if (inputValue.trim() !== "") {
      agregarElemento({ ...elementos, [tipo]: [...elementos[tipo], inputValue] });
      setInputValue(""); // Limpia el input
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="elemento a agregar"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Libros</h2>
      <button onClick={() => masElemento("libros")}>AGREGAR LIBRO</button>
      <ListasVarias listado={elementos.libros} />
      <h2>Peliculas</h2>
      <button onClick={() => masElemento("peliculas")}>AGREGAR PELICULA</button>
      <ListasVarias listado={elementos.peliculas} />
      <h2>Comidas</h2>
      <button onClick={() => masElemento("comidas")}>AGREGAR COMIDA</button>
      <ListasVarias listado={elementos.comidas} />
    </div>
  );
}

//$ Quitar elementos de una lista:


const initialItems = [
  "💙",
  "☯",
  "💛",
  "💌",
];

function Items({ listado }) {
  return (

    <ul>
      {
        listado.map((item, index) => (
          <div cl>
            <li key={index}>{item}</li>
            <button onClick>💢</button>
          </div>

        ))}

    </ul>
  );
}

export function ListRemove() {
  const [item, agregarItem] = useState(initialItems);
  const [inputValue, setInputValue] = useState(""); // Agrega estado para el valor del input

  const manejarClick = () => {
    if (inputValue.trim() !== "") {
      /// Verifica que el valor no esté vacío
      agregarItem([...item, inputValue]);
      setInputValue(""); /// Limpia el input
    }
  };

  return (
    <div>
      <h1>EMOJIS</h1>
      <input
        type="text"
        placeholder="item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={manejarClick}>AGREGAR ITEM</button>
      <Items listado={item} />
    </div>
  );
}


