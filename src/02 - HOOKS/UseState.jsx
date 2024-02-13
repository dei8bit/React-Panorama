//#  UseState:
//+ useState permite gestionar estados en los componentes, un estado es un dato que puede variar.
//* Si deseamos que varios campos tengan varios datos independientes, le corresponde un estado a CADA CAMPO!!


export default function UseStateHook(props) {
  const [contar, setContar] = React.useState(0);

  return (
      <div>
          <h1>{contar}</h1>
          <button onClick={() => setContar(contar + 1)}>Click!</button>
      </div>
  );
}