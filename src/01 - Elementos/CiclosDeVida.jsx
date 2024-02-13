//# CICLOS DE VIDA:
//+ Los ciclos de vida son diferentes ciclos por los que pasa un componente.
//+ En resumen son: Creacion, renderizacion, finalizacion.
//+ Para evitar que los componentes gasten recursos innecesarios es vital comprender los cilos de vida y como gestionarlos.
//+ Estos ciclos de vida son particualres de los componentes de clase y con la llegada de los HOOKS no son necesarios en estos.

//+ Los ciclos de vida en React son los eventos que ocurren desde que se monta (se renderiza por primera vez) un componente hasta que se desmonta (se elimina del DOM). Los ciclos de vida incluyen:
//• componentDidMount(): se ejecuta una vez después de que el componente se haya montado en el DOM.
//• componentDidUpdate(): se ejecuta después de que el componente se haya actualizado.
//• componentWillUnmount(): se ejecuta justo antes de que el componente sea desmontado del DOM.
//+ Cada uno de estos ciclos de vida tiene un propósito específico y pueden ser utilizados para ejecutar ciertas acciones en momentos específicos del ciclo de vida del componente.


import React from 'react'

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fecha: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            fecha: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>¿Qué hora es?</h1>
                <h2>Son las {new Date().toLocaleTimeString()}</h2>
            </div>
        );
    }
}