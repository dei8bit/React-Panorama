//# IMAGENES:
//+ Contamos con 4 formas de agregar imagenes en react.
  //• Usando  import
  //• Usando require
  //• Importando SVGs directamente como componentes
  //• Cargandolas desde una URL.



//. Usando  import:
//+


import img from './imgRandom.jpg'

function ImageImport() {
  return (
    <div>
      <img src={img} alt="imagen import" width={200} height={200} />
    </div>
  )
}

export default ImageImport

//. Usando require:
//+

// function Imagenes() {
//   return (
//     <div>Imagenes</div>
//   )
// }

// export default Imagenes

//. Importando SVGs directamente como componentes:
//+

//. Cargandolas desde una URL.:
//+
