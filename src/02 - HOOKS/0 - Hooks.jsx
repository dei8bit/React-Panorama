//# HOOKS:
//+ Los hooks son una característica de React que permite simular un estado y otras características en COMPONENTES FUNCIONALES!
//+ Los hooks permiten reutilizar lógica entre componentes y simplificar el código.
//+ Cada Hook Resuelve una problematica puntual y por eso es util conocerlos.

//_ Reglas de los HOOOKS:
//* NO LLAMRLOS DENTRO DE BUCLES CONDICIONAES O FUNCIONES ANIDADAS.
//* SOLO SE PUEDEN LLAMAR DESDE CUSTOM HOOKS O COMPONENTES FUNCIONALES.

//• useState: permite agregar estado a los componentes
/// se puede usar para rastrear variables de estado, como contadores, formularios, datos de usuario, etc.
//• useEffect: Se utiliza para administrar efectos secundarios en componentes.
/// Puedes usarlo para ejecutar código después de que el componente se monte, se actualice o se desmonte.
/// Es útil para realizar peticiones de red, suscribirse a eventos, limpiar recursos, etc.
//• useContext: Permite acceder al contexto en tu aplicación React.
/// Puedes utilizarlo para acceder a datos globales o temas en toda tu aplicación.
//• useRef:  Permite crear referencias mutables que pueden estar vinculadas a elementos del DOM u otros valores que persisten entre renderizaciones.
/// Esto es útil para acceder a elementos del DOM, como en el caso de animaciones o interacciones directas con el DOM.
//• useReducer: Es una alternativa a useState cuando tienes un estado más complejo que requiere lógica más avanzada para gestionar.
/// Permite gestionar el estado a través de acciones y un reductor, similar a Redux.
//• useMemo y useCallback: Son utilizados para optimizar el rendimiento.
/// useMemo te permite memorizar un valor calculado, evitando su recálculo innecesario,
/// mientras que useCallback te permite memorizar una función para evitar la recreación de funciones innecesarias.

//. Custom Hooks:
//+React te permite crear tus propios hooks personalizados.
//+ Los custom hooks son funciones que encapsulan lógica compartida y pueden ser reutilizados en múltiples componentes funcionales.
