import React, { useContext, useState } from "react";
const booksData = [
  { nombre: "1oo años de soledad", autor: "Gabriel Garcia Marquez" },
  { nombre: "La sombra fuera del espacio", autor: "H. P. Lovecraft" },
  { nombre: "Guerra y paz", autor: "León Tolstói" },
];

const mostrarAutor = (numero) => {
  return booksData[numero].autor;
};

const bookContext = React.createContext();
const infoBook = React.createContext();

function UseContextos({ children }) {
  return (
    <>
      <bookContext.Provider value={booksData}>
        <infoBook.Provider value={mostrarAutor}>{children}</infoBook.Provider>
      </bookContext.Provider>
    </>
  );
}
function Hijos({ numero }) {
  const [mostrarAutor, setMostrarAutor] = useState(false);
  const books = useContext(bookContext);

  const handleMostrarAutor = () => {
    setMostrarAutor(!mostrarAutor);
  };

  return (
    <>
      <h1>{books[numero].nombre}</h1>
      <button onClick={handleMostrarAutor}>Mostrar Autor</button>
      <h2>Autor: {mostrarAutor && books[numero].autor} </h2>
    </>
  );
}

export default function VariosContextos() {
  return (
    <UseContextos>
      <Hijos numero={0} />
      <Hijos numero={1} />
      <Hijos numero={2} />
    </UseContextos>
  );
}
