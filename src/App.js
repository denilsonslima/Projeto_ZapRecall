import { useState } from "react";
import GlobalStyle from "./assets/css/globalStyles";
import TelaInicial from "./componentes/TelaInicial";
import TelaPrincipal from "./componentes/TelaPrincipal";

function App() {
  const [play, setPlay] = useState(false)

  return (
    <div className="App">
      <GlobalStyle />
      <TelaInicial
        play={play}
        setPlay={setPlay}
      />

      <TelaPrincipal
        play={play}
      />
    </div>
  );
}

export default App
