//# REACT:
//+ React es una libreria pensada para hacer INTERFACES DE USUARIO, en cualquier sitio.
//+ Para empezar a usar react son necesarios 4 pasos:
  //• importar React y ReactDOM
  //• definir la raiz del documento mediante el metodo "createRoot" (es lo que se conoce como virtual doom)
  //• crear los elementos deseados  mediante el metodo "createElement" 
  //• renderizar estos elementos mediante el metodo "root.render"

//* Aunque es posible "probar" react en un documento HTML no se puede aprovechar todo su potencial!!


//. COMPONENTES:
//+ React trabaja con COMPONENTES, estos no son mas que funciones que retornan porciones de codigo HTML.
//+ Los componentes se escriben con una sintaxis particular llamada JSX 

//. ELEMENTOS:
//+ Los elementos HTML como divs,headings,input, etc... pueden estar en componentes de React
//+ Estos componentes van a renderizar los elementos que contengan.

//. RENDERIZACION:
//+ Renderizar es mostrar en pantalla algo; React Renderiza elementos
//+ Una renderizacion surge en tres situaciones:
  //• Al inicio de la creacion de la interfaz, por primera vez.
  //• Cuando Se actualiza el estado interno de un componente. (y se modifican solo las partes que cambiaron de este)
  //• Cuando Se actualiza el estado de un componente padre (y se propagan los cambios hacia todos los hijos).

//. VIRTUAL DOM:
//+ El VIRTUAL DOM es un concepto sobre el cual trabaja React.
//+ Consiste en una copia virtual del DOM real, que SOLO renderiza los elementos que mutaron y no lo demas.
//+ De esta forma se optimizan los recursos.
//+ Es importante entender que React RENDERIZA TODO un componente que muto, aunque no lo refleje en el Virtual DOM.
//+ Osea que aunque un elemento actualize solo un atributo que haya cambiado, React por detras Actualizo TODO el componente.
//+ Luego lo comparo con el DOM y RENDERIZO solo la porcion que cambio y no todo el elemento.



//. createRoot:
//+ Este metodo permite definir la raiz en la cual se van a "ubicar" todos los componentes que creemos.
//- SINTAXIS:--> ReactDOM.createRoot(elemento raiz)

//. createElement:
//+ Este metodo nos permite definir un elemento mediante  parametros (nombre de la etiqueta, objeto con atributos y valores, contenido de la etiqueta)
//- SINTAXIS:--> ReactDOM.createElement(tag,{atributos y valores opcionales},contenido de la tag)

//. root.render:
//+ Este metodo  nos permite renderizar nuestros componentes en un envoltorio definido (por ejemplo un div)
//* ES OBLIGATORIO RENDERIZAR SOLO UN ELEMENTO!!
//- SINTAXIS:--> root.render(envoltorio)

//_ Fragmentos:
//+ En caso de que no queramos un envoltorio puntual y solo queramos renderizar los componentes
//+ los fragmentos permiten agrupar elementos sin hacer uso de un nodo que los envuelva. 
//+ Esto estaria reemplazando al tag del createElement
//- SINTAXIS:--> React.Fragment