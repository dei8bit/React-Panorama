// # CSS MODULES:
// + La idea central de CSS Modules es encapsular estilos dentro de módulos específicos de un componente
// + Evitando así la colisión de nombres de clases en todo el proyecto.
// + Cada componente puede tener su propio archivo CSS.
// + Y las clases definidas en ese archivo están localmente disponibles solo para ese componente *
// + Proporciona una forma efectiva de modularizar estilos y mejorar la mantenibilidad y organización en proyectos más grandes
// + Aunque no es el objetivo, esto permite tener dos clases con el mismo nombre aplicadas a diferentes componentes sin colisionar

import styles from "./MiComponente.module.css";

export default function CssModules() {
  return (
    <>
      <div className={styles.container}>{/* Contenido del componente */}</div>
    </>
  );
}
