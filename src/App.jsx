import CssModules from "./CSS MODULES/CssModules";
//# ELEMENTOS:
// import SintaxisJSX from './Elementos/SintaxisJSX'
// import Componentes from './Elementos/Componentes'

import {
  Numeros,
  Texto,
  Booleanos,
  Arreglos,
  Objetos,
  Funciones1,
  Funciones2,
  Funciones3,
  Funciones4,
  Elementos,
  Contenedor,
  ComponentePadre,
  ObjetoComoProp,
} from "./Elementos/Props";

import Eventos from "./Elementos/Eventos";
import { Contador, Contadores, EstadoComoProp } from "./Elementos/Estado";

import {
  IF_True,
  IF_False,
  CondicionalTernario1,
  CondicionalTernario2,
  CondicionalAND,
  RenderCondicional,
  Autorizacion1,
  Autorizacion2,
} from "./Elementos/Condicionales";

import {
  Input,
  InputConEstado,
  Formulario,
  FormularioModularizado,
  FormularioClase,
} from "./Elementos/Formularios";

import {
  ListaFor,
  ListaForIn,
  ListaForOf,
  ListaMap,
  Libros,
  ListaDinamicas,
  ListasDinamicas,
  ListasDinamicas2,
  ListRemove,
} from "./Elementos/Listas";

// import CiclosDeVida from './Elementos/CiclosDeVida'
// import PasoDeEstado from './Elementos/PasoDeEstado'
// import Composicion from './Elementos/Composicion'

//# MULTIMEDIA:
// import Imagen from "./multimedia/Imagenes";

//# HOOKS:

//# PRACTICA:

const devuelveTexto = () => "texto";
const mayuscula = (texto) => texto.toUpperCase();

const suma = (a, b) => {
  return a + b;
};

const otraFuncion = () =>
  "Texto desde un callback dentro de una funcion dentro de una prop ._.";
const llamadora = (funcionCallback) => {
  return funcionCallback();
};

const heading1 = <h1>HEADING 1</h1>;
const lista = (
  <ul>
    <li>asd</li>
    <li>dsa</li>
  </ul>
);

const hijo = (
  <div>
    <p>hola</p> <b>soy un children</b>
  </div>
);
const objetoConProps = {
  nombre: "Rudolf",
  apellido: "Jarx",
  edad: "32 años",
  direccion: "bor 23x",
  estatura: "1.70m",
  peso: "26Kg",
};

//# HOOKS:
import UseEffect from "./HOOKS/UseEffect";
import UseRef from "./HOOKS/UseRef";
import UseState from "./HOOKS/UseState";
import UnContexto from "./HOOKS/useContext/UnContexto";
import VariosContextos from "./HOOKS/useContext/VariosContextos";
import UseReducer from "./HOOKS/UseReducer";
import UseCallback from "./HOOKS/UseCallback";
import UseMemo from "./HOOKS/UseMemo";
import CustomHooks from "./HOOKS/CustomHooks";

export default function App() {
  return (
    <>
      {/* <CssModules/> */}

      {/*//_ FUNDAMENTOS: */}

      {/* <SintaxisJSX/> */}
      {/* <Componentes/> */}

      {/*//_ PROPS: */}
      {/* <Numeros numero={5}/> */}
      {/* <Texto texto={"Un texto maravilloso"}/> */}
      {/* <Booleanos booleano={true}/>    /// true */}
      {/* <Booleanos booleano/>           /// true */}
      {/* <Booleanos booleano={false}/>   /// false */}
      {/* <Booleanos/>                    /// undefined */}
      {/* <Arreglos arreglo={[1,2,3,4]}/> */}
      {/* <Objetos
        objeto={{
          tipo: "Guitarra",
          color: "Fluorescente psicodelica",
          peso: "16 Kg",
        }}
      /> */}

      {/* <Funciones1 funcion={devuelveTexto}/> */}
      {/* <Funciones2 funcion={mayuscula} texto={"texto simple "}/> */}
      {/* <Funciones3 funcion={suma} n1={2} n2={4}/> */}
      {/* <Funciones4 funcion={llamadora(otraFuncion)}/> */}

      {/* <Elementos elemento={heading1} /> */}
      {/* <Elementos elemento={lista} /> */}

      {/* <Contenedor children={hijo}/> */}
      {/* <ComponentePadre/> */}

      {/* <ObjetoComoProp {...objetoConProps} /> */}

      {/*//_ Conceptos avanzados(?): --- */}

      {/* <Eventos/> */}

      {/*//, ESTADO: */}

      {/* <Contador/> */}
      {/* <Contadores/> */}
      {/* <EstadoComoProp textoInicial={"Texto inicial"}/> */}

      {/* <IF_True/> */}
      {/* <IF_False/> */}
      {/* <CondicionalTernario1/> */}
      {/* <CondicionalTernario2/> */}
      {/* <CondicionalAND condicion={true}/> */}
      {/* <CondicionalAND condicion={false}/> */}
      {/* <Autorizacion1/> */}
      {/* <Autorizacion2/> */}
      {/* <RenderCondicional texto1={"carmesi"} texto2={"botana"} /> */}

      {/* <Input/> */}
      {/* <InputConEstado/> */}
      {/* <Formulario/> */}
      {/* <FormularioModularizado/> */}
      {/* <FormularioClase/> */}

      {/* //_ LISTAS: */}
      {/* <ListaFor/> */}
      {/* <ListaForIn/> */}
      {/* <ListaForOf/> */}
      {/* <ListaMap/> */}
      {/* <Libros/> */}
      {/* <LibrosFijos/> */}
      {/* <ListaDinamicas/> */}
      {/* <ListasDinamicas/> */}
      {/* <ListasDinamicas2/> */}
      {/* <ListRemove/> */}

      {/* <PasoDeEstado/> */}
      {/* <CiclosDeVida/> */}
      {/* <Composicion/> */}

      {/*//, HOOKS: */}

      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      {/* <UnContexto/> */}
      {/* <VariosContextos/> */}
      {/* <UseReducer/> */}
      {/* <UseCallback/> */}
      {/* <UseMemo/> */}
      <CustomHooks/>
    </>
  );
}
