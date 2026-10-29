import React, { useState } from 'react'


function Pneu() {
  const [inputDesejada, setInputDesejada] = useState('')
  const [inputLida, setInputLida] = useState('')
  const [resultado, setResultado] = useState('Digite as pressões e aperte o botão')


  function calcularDiferenca() {
    let desejada = Number(inputDesejada)
    let lida = Number(inputLida)
    
    let diferenca = desejada - lida
    
    // Atualiza o parágrafo com o valor calculado
    setResultado(`Diferença: ${diferenca}`)
  }


  return (
    <div className='Pneu'>
      <h1>Calibrador de Pneu (OBI 2010)</h1>


      <label htmlFor="desejada">Pressão desejada (N):</label>
      <input 
        id="desejada"
        type="number" 
        value={inputDesejada}
        onChange={(e) => setInputDesejada(e.target.value)}
      />


      <label htmlFor="lida">Pressão lida pelo pneu (M):</label>
      <input 
        id="lida"
        type="number" 
        value={inputLida}
        onChange={(e) => setInputLida(e.target.value)}
      />


      <button onClick={calcularDiferenca}>Calcular</button>


      <p>{resultado}</p>
    </div>
  )
}


export default Pneu