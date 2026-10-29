import React, { useState } from 'react'


function Lesmas() {
  const [inputL, setInputL] = useState('')
  const [inputVelocidades, setInputVelocidades] = useState('')
  const [resultado, setResultado] = useState(
    'Digite a quantidade de lesmas e suas velocidades'
  )


  function calcularNivel() {
    let L = Number(inputL)
    let velocidades = inputVelocidades
      .trim()
      .split(/\s+/)
      .map(Number)


    if (L <= 0 || velocidades.length !== L) {
      setResultado('Digite a quantidade correta de velocidades!')
      return
    }


    let maiorVelocidade = Math.max(...velocidades)
    let nivel


    if (maiorVelocidade < 10) {
      nivel = 1
    } else if (maiorVelocidade < 20) {
      nivel = 2
    } else {
      nivel = 3
    }


    setResultado `(Nível da lesma mais rápida: ${nivel})`
  }


  return (
    <div className="Lesmas">
      <h1>A Corrida das Lesmas</h1>


      <label htmlFor="quantidade">
        Quantidade de lesmas:
      </label>


      <input
        id="quantidade"
        type="number"
        value={inputL}
        onChange={(e) => setInputL(e.target.value)}
      />


      <label htmlFor="velocidades">
        Velocidades das lesmas:
      </label>


      <input
        id="velocidades"
        type="text"
        value={inputVelocidades}
        onChange={(e) => setInputVelocidades(e.target.value)}
        placeholder="Ex: 10 15 20 8 5"
      />


      <button onClick={calcularNivel}>
        Calcular nível
      </button>


      <p>{resultado}</p>
    </div>
  )
}

export default Lesmas