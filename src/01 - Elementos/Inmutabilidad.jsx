//# INMUTABILIDAD:

//+ El enfoque de inmutabilidad se refiere a la práctica de no modificar directamente los datos una vez que han sido creados. 
//+ La idea es creas una nueva copia de los datos con las modificaciones aplicadas.
//+ La inmutabilidad es una buena práctica en programación por varias razones:
  //• Facilita el rastreo de cambios: Cuando los datos son inmutables, es más fácil rastrear los cambios y entender cómo evolucionan con el tiempo. Esto es especialmente útil en aplicaciones grandes y complejas.
  //• Prevención de efectos secundarios: La inmutabilidad ayuda a prevenir efectos secundarios no deseados. Si se modifican los datos originales, es posible que otros componentes o partes del código se basen en esos datos y no esperen que cambien.
  //• Facilita la concurrencia: En aplicaciones concurrentes, la inmutabilidad puede ayudar a evitar problemas de concurrencia, ya que no hay necesidad de preocuparse por varios hilos o procesos que modifican los mismos datos al mismo tiempo.

//+ En cuanto a cómo la inmutabilidad facilita el rastreo de cambios a lo largo del tiempo, se refiere al hecho de que, cuando los datos son inmutables, cada cambio crea una nueva versión de los datos, y las versiones anteriores no se ven afectadas. Esto permite un historial claro de cambios, lo que puede ser útil para la depuración, el seguimiento de errores y la gestión de estados en aplicaciones complejas.

//* HACER UN EJEMPLO DE INMUTABILIDAD AQUI: