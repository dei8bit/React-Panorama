//# VIDEOS:
//+ Los videos son una excelente opcion para mostrar informacion y atraer usuarios en paginas web.
//+ Para mostrar videos en nuestra aplicacion podemos hacerlo de forma manual o con librerias externas

//. Desde URL:
//+ Para esto simplemente necesitamos una URL con un video apto para su uso.

// const src = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

// const Video = () => {
//   return (
//     <video controls width="100%">
//       <source src={src} type="video/mp4" />
//       Sorry, your browser doesn't support embedded videos.
//     </video>
//   );
// };

// export default Video;


//. Desde YouTube:
//+ Para esto tenemos que copiar el codigo embebido de los videos.

// const Video = () => {
//   return (
// <iframe
//   width="560"
//   height="315"
//   src="https://www.youtube.com/embed/GHpIb6Ua0sw?si=usKoEyN7VMuiW8SB"
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//   allowfullscreen
// ></iframe>
//   );
// };

// export default Video;


//. Localmente:
//+ Poner videos de forma local es una de las opciones mas complicadas sin bibliotecas externas.

import { useState } from "react";

const Video = () => {
  const [src, setSrc] = useState("./");

  const handleChange = (event) => {
    try {
      // Get the uploaded file
      const file = event.target.files[0];

      // Transform file into blob URL
      setSrc(URL.createObjectURL(file));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <video src={src} controls width="100%">
        Sorry, your browser doesn't support embedded videos.
      </video>
      <input type="file" onChange={handleChange} />
    </>
  );
};

export default Video;



//. Bibliotecas externas:
//• React Player : https://github.com/cookpete/react-player
//• React Youtube : https://github.com/tjallingt/react-youtube
//• Plyr React : https://github.com/chintan9/plyr-react
