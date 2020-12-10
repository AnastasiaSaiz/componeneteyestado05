import { useState } from "react";

const array = ["Graciela", "Marga", "Leire"];

function App() {
  const [contador, setContador] = useState(0);
  const siguiente = () => {
    if (contador == 2) {
      setContador(0)
    } else {
      setContador(contador + 1)
    }
  };
  return (
    <div>
      <h1>{array[contador]}</h1>
      <button onClick={siguiente}>Siguiente</button>
    </div>
  );
}

export default App;
