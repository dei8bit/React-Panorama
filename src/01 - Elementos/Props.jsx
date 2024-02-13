//# PROPIEDADES:
//+ Las propiedades o "props" de los componentes permiten que estos puedan tener atributos especiales.
//+ estas propiedades pueden ser valores que el componente renderiza o valores de atributos del componente.
//+ props es un objeto que permite agregar propiedades a nuestro componente.
//+ estas props pueden ser cualquier objeto JS: number,string,boolean,array,function,object...
//* Las propiedades deben ser inmutables!! no es una buena practica redefinirlas nuevamente

//. Definir propiedades
//+ Definimos las propiedades de un componente en la definicion del mismo.

//• SIN DESESTRUCTURACION:
//- SINTAXIS Componente funcional: --> function Name(props){return props.propiedad}
//- SINTAXIS Componente de clase:  --> class Name extends React.Component {render(){return <>...{this.props.propiedad}...</>;}}

//• CON DESESTRUCTURACION:
//- SINTAXIS Componente funcional: --> function Name({propiedad}){return {propiedad}}
//- SINTAXIS Componente de clase:  --> class Name extends React.Component {render(){const { propiedad } = this.props; return  <>...{propiedad}...</>;}}

//$ Ejemplos :
//• COMPONENTES FUNCIONAL:
// export default function Saludo(props) {return <h1>Hola {props.propiedad}</h1>;}
// export default function Saludo({propiedad}) {return <h1>Hola {propiedad}</h1>;}

//• COMPONENTES DE CLASE:
// class  Saludo extends React.Component{render(){return <h1> Hola {this.props.nombre}</h1>;}}
// class  Saludo extends React.Component{render(){const {nombre} = this.props return <h1>Hola {nombre}</h1>;}}

//, Valores por defecto en la definicion:
//+ Esto puede ser útil para evitar errores o comportamientos inesperados cuando no se pasan todas las props requeridas.
//- SINTAXIS --> function Name({propiedad1 = 'Default-value1',...,propiedadN° = 'Default-valueN°'}){return {propiedad}}
//* El valor predeterminado sólo se asigna si falta la prop  o si se pasa {undefined}.
//* Si se pasa {null} o {0}, el valor predeterminado no se aplicará!!

//$Ejemplo:
// export default function Saludo({nombre="Anonimo"}) {return <h1>Hola {nombre}</h1>;}

//. Usar propiedades:
//+ Cuando llamamos a este componente o lo utilizamos es cuando le damos valores a estas propiedades.
//- SINTAXIS doble etiqueta   :--> <Componente propiedad1="valor1"...propiedadN°="valorN°"></Componente>
//- SINTAXIS self closing tag :--> <Componente propiedad1="valor1"...propiedadN°="valorN°"/>
//* En caso de que queramos mandar numeros en vez de strings debemos indicarlo entre llaves {}
//+ Si no usamos una prop definida esta por defecto tendra el valor "undefined"
//+ Si usamos una prop sin valor esta por defecto tendra el valor "true"

//$ numeros como props:

export function Numeros({ numero }) {
  return (
    <>
      <p>Numero + Numero= {numero + numero}</p>
      <p>Numero * Numero= {numero * numero}</p>
    </>
  );
}

//$ texto como props:
export function Texto({ texto }) {
  return (
    <>
      <b> tu texto es:</b> <i>"{texto}"</i>
    </>
  );
}

//$ booleanos como props:
//+ Si no usamos una prop definida esta por defecto tendra el valor "undefined"
//+ Si usamos una prop sin valor esta por defecto tendra el valor "true"
//+ Los booleanos se suelen usar para renderizar componentes en caso de que sean true o false.

export function Booleanos({ booleano }) {
  console.log(booleano);
}

/// <Booleanos booleano={true}/>    /// true
/// <Booleanos booleano/>           /// true
/// <Booleanos booleano={false}/>   /// false
/// <Booleanos/>                    /// undefined

//$ arreglos como props:
export function Arreglos({ arreglo }) {
  return (
    <div>
      <p>Arreglo: {arreglo}</p>
    </div>
  );
}

//$ objetos como props:
//+ Cuando se trata de objetos debemos usar los mismos nombres de las propiedades del objeto.

export function Objetos({ objeto }) {
  return (
    <div>
      <h3>
        Objeto: <i>{objeto.tipo}</i>
      </h3>
      <ul>
        <li>
          <b>Color:</b> {objeto.color}
        </li>
        <li>
          <b>Peso:</b> {objeto.peso}
        </li>
      </ul>
    </div>
  );
}

//$ funciones como props:
//+ Respecto a las funciones hay que considerar que la logica de estas debe ser coherente con la funcion que se reciba.
//* osea que la FUNCION ESTABLECIDA como prop debe ser compatible con la FUNCION PASADA como prop !!!
//+ Lo otro importante es la diferencia entre la FUNCION EN SI y la EJECUCION DE LA FUNCION.
//+ Si pasamos la ejecucion de la funcion devuelve lo que retorna la funcion.
//+ Si pasamos la funcion en si se va a ejectar la logica de la misma.
//- Recuerdese en las funciones flecha la diferencia entre  ()=>{codigo en bloque} y ()=>(resultado)

export const Funciones1 = ({ funcion }) => {
  return (
    <div>
      <h2>{funcion()}</h2>
    </div>
  );
};

export const Funciones2 = ({ funcion, texto }) => {
  return (
    <div>
      <h2>{funcion(texto)}</h2>
    </div>
  );
};

export const Funciones3 = ({ funcion, n1, n2 }) => {
  return (
    <div>
      <h3>{funcion(n1, n2)}</h3>
    </div>
  );
};

export const Funciones4 = ({ funcion }) => {
  return (
    <div>
      <h3>{funcion}</h3>
    </div>
  );
};

//$ Elementos como props:
//+ Un elemento es propio de HTML, y tambien puede recibirse y enviarse como prop.
export const Elementos = ({ elemento }) => {
  return <div>{elemento}</div>;
};

//$ Ejemplo con varios tipos de datos:

//. propTypes:
//+ Propr types es un objeto que permite establecer un tipo de dato obligatorio para nuestras props
//+ Ademas permite establecer si debe ser obligatorio que le asignemos un valor a nuetras props
//+ A partir de react 15 esta funcionalidad se movio como un paquete externo a React
//- SINTAXIS:--> Componente.propTypes{propiedad1: PropTypes.tipoDato}
//- SINTAXIS:--> Componente.propTypes{propiedad1: PropTypes.tipoDato.isRequired}

// import PropTypes from 'prop-types';

//$ Ejemplo:

// export default function PropsTipadas({propiedad1, propiedad2}) {
//   return (
//     <div>
//       <h1>Prop Tipada 1:{propiedad1}</h1>
//       <h1>Prop Tipada 2:{propiedad2}</h1>
//     </div>
//   )
// }

// PropsTipadas.PropTypes = {
//   propiedad1:PropTypes.string.isRequired,
//   propiedad1:PropTypes.number.isRequired
// }

//. props.children:
//+ Permite pasar componentes o elementos HTML como hijos a un componente padre.
//+ Esto es útil cuando deseas componer de manera flexible y anidar componentes dentro de otros.
//* Para hacer uso de  props.children, es necesario usarlo dentro de componentes con doble etiqueta  <tag>...</tag> !!

//$ Ejemplo 1:

export function Contenedor(props) {
  return <>{props.children}</>;
}

//$ Ejemplo 2:

function MiComponente({ children }) {
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
        {children}
      </div>
    </div>
  );
}

export function ComponentePadre() {
  return (
    <div>
      <MiComponente>
        <h2>Titulos desde el hijo</h2>
        <b>Parrafo como props.children</b>
        <p>Otro parrafo mas</p>
        <i>y podria cualquier cosa aqui: elementos, componentes,etc...</i>
      </MiComponente>
    </div>
  );
}

//. pasar objeto como props con el operador rest:
//+ En caso de que nuestro que nuestras props sean demasiadas, podemos ponerlas todas dentro de un objeto y pasarlas
//+ Cada prop debe ser la clave de nuestro objeto a pasar, y sus valores son definidos por nosotros.
//+ Esta no es una muy buena practica, pero puede ser util en determinada ocasion
//+ Solo se van a renderizar las props que esten definidas tal cual en el objeto. (no importa el orden en que esten las props)
//- SINTAXIS: --> objeto = {prop1:valor1,...,propN°:valorN°}

export const ObjetoComoProp = ({
  nombre,
  apellido,
  edad,
  direccion,
  estatura,
  peso,
}) => {
  return (
    <div>
      <h2>{nombre} {apellido}</h2>
      <p><b>Edad:</b>{edad}</p>
      <p><b>direccion:</b>{direccion}</p>
      <p><b>estatura:</b>{estatura}</p>
      <p><b>peso:</b>{peso}</p>
    </div>
  );
};
