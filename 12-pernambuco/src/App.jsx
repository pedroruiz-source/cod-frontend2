import { useState } from 'react'
import './App.css'
import Oracaoprogamador from './componentes/Oracaoprogramador'
import OraçãoAprendiz from './componentes/OraçãoAprendiz'
import Orcaoestudante from './componentes/Orcaoestudante'
import Oraçaoback from './componentes/Oracaoback'
function App() {
  const [oraçao, setOraçao] = useState(0)
function mostrarOraçao() {}




  return (
    <div className='App'>
<nav>
<button onClick={() => setOraçao(0)}>Oraçao do aprendiz</button>
<button onClick={() => setOraçao(1)}>Oraçao do programador</button>
<button onClick={() => setOraçao(2)}>Oraçao do estudante</button>
<button onClick={() => setOraçao(3)}>Oraçao do backend</button>



</nav>

<h1>Orações</h1>

{oraçao === 0 && <OraçãoAprendiz/> }
{oraçao === 1 && <Oracaoprogamador/> }
{oraçao === 2 && <Orcaoestudante /> }
{oraçao === 3 && <Oraçaoback/> }

      </div>

         )
}

export default App