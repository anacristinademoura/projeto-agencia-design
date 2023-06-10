import React, { useState } from 'react'
import './App.css'

import Topo from "./componentes/Topo";
import SecaoBanner from "./componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho";
import Rodape from "./componentes/Rodape"

function App() {

  const [modoEscuro, setModoEscuro] = useState(false);

  const alterarModo = () => {
    setModoEscuro(!modoEscuro)
  }

  return (
    <main>
      <Topo alterarModo={alterarModo} modoEscuro={modoEscuro}/>
      <SecaoBanner modoEscuro={modoEscuro}/>
      <SecaoExperienciaTrabalho modoEscuro={modoEscuro}/>
      <Rodape modoEscuro={modoEscuro}/>
    </main>
  );
}

export default App;
