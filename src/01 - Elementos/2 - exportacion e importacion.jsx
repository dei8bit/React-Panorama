//# EXPORTACION
//+ Hay varias maneras de exportar uno o varios componentes.

//. exportación por default:
//+ Permite exportar un componente por defecto:
//- SINTAXIS:--> export default ComponentName;

//. exportación en línea:
//+ Permite exportar uno o varios componentes.
//- SINTAXIS:--> export function ComponentName() {return(ELEMENTS)}

//. exportación múltiple:
//+ Permite exportar varios elementos especificados desde un archivo.
//- SINTAXIS:--> export { Variable_name1 ,…, Variable_nameN°};

//. exportación múltiple con alias:
//- SINTAXIS:--> export { Variable_name1 as Alias1 ,…, Variable_nameN° as AliasN° };


//# IMPORTACION:
//+ Hay varias maneras de importar uno o varios componentes.
//* ¡Las importaciones se escriben al inicio del archivo!

//. importación por default:
//- SINTAXIS:-->  import ComponentName from "./URL";
//. importación múltiple:
//- SINTAXIS:-->  import { ComponentName1 ,…, ComponentNameN° } from "./ URL ";


//* importar  [import React from 'react'], ya no es necesario en los componentes individuales!!
