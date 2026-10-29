import React, { useState } from 'react'


function Bomba() {
  const [inputN, setInputN] = useState('')
  const [resultado, setResultado] = useState(
    'Digite um número e aperte o botão'
  )


  function gerarBomba() {
    let N = Number(inputN)
    let linhas = []


    for (let i = 0; i < N; i++) {
      let numero = 1 + i * 4


      linhas.push(`${numero} ${numero + 1} ${numero + 2} BOMBA`)
    }


    setResultado(linhas.join('\n'))
  }


  return (
    <div className='Bomba'>
      <h1>BOMBA</h1>


      <label htmlFor="numero">
        Digite o número de linhas:
      </label>


      <input
        id="numero"
        type="number"
        value={inputN}
        onChange={(e) => setInputN(e.target.value)}
      />


      <button onClick={gerarBomba}>Gerar</button>


      <p style={{ whiteSpace: 'pre-line' }}>{resultado}</p>
    </div>
  )
}


export default Bomba