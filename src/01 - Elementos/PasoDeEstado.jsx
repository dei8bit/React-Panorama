//# PASOS DE ESTADO:
//+ Los estados en React pueden existir tanto en componentes padres como hijos.
//+ React utiliza los conceptos de "props" y "estado" para compartir datos entre componentes.


//_ SIN HOOKS:

//. Paso de estado de padre a hijo:

// export default function Padre() {

//   const info = "Informacion desde el Padre!";

//   return (
//     <div>
//       <h1>Componente padre:</h1>
//       <ChildComponent data={info} />
//     </div>
//   );
// }

// function ChildComponent({data}) {
//   return (
//     <div>
//       <h2>Componentes hijo:</h2>
//       <p><b>Data Desde padre:</b>{data}</p>
//     </div>
//   );
// }


//. Paso de estado de hijo a padre:

// export default function Padre() {
//   const recibirDatosDelHijo = (data) => {
//     console.log(`Info del hijo: ${data}`);
//   }
//   return (
//     <div>
//       <h1>Componente Padre </h1>
//       <Hijo envioAlPadre={recibirDatosDelHijo} />
//     </div>
//   );
// }

// function Hijo({envioAlPadre}) {

//   const infoHijo = "Informacion desde el hijo";

//   const sendData = () => {
//     envioAlPadre(infoHijo);
//   }
//   return (
//     <div>
//       <h2>Componente Hijo</h2>
//       <button onClick={sendData}>Enviar Info a Padre</button>
//     </div>
//   );
// }

//_ CON  HOOKS:
// import { useState } from "react";




function NumeroInput(props) {
    return (
        <div>
            <h1>{props.titulo}</h1>
            <input value={props.value} onChange={props.onChange} />
        </div>
    );
}

function Seccion(props) {

    const [operacion, setOperacion] = React.useState('5%');
    const [valor, setValor] = React.useState(0);

    const onCinco = e => {
        setOperacion('5%');
        setValor(e.target.value);
    }
    const onQuince = e => {
        setOperacion('15%');
        setValor(e.target.value);
    }

    const cinco = operacion === '5%' ? valor : valor / 3;
    const quince = operacion === '15%' ? valor : valor * 3;

    return (
        <div>
            <NumeroInput titulo="5%" value={cinco} onChange={onCinco} />
            <NumeroInput titulo="15%" value={quince} onChange={onQuince} />
            {
                <p>Ultimo Input: {operacion}</p>
            }
        </div>
    );
}