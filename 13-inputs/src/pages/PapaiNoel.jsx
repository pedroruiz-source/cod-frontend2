import React, { useState } from 'react'


function PapaiNoel() {
  const [inputN, setInputN] = useState('')
  const [resultado, setResultado] = useState(
    'Digite um número e aperte o botão'
  )


  function gerarHo() {
    let N = Number(inputN)
    let palavras = []


    for (let i = 0; i < N; i++) {
      palavras.push('Ho')
    }


    setResultado(palavras.join(' ') + '!')
  }


  return (
    <div className='PapaiNoel'>
      <h1>Ho Ho Ho - Papai Noel</h1>


      <label htmlFor="numero">
        Quantas vezes o Papai Noel deve dizer Ho?
      </label>


      <input
        id="numero"
        type="number"
        value={inputN}
        onChange={(e) => setInputN(e.target.value)}
      />


      <button onClick={gerarHo}>Gerar Ho</button>


      <p>{resultado}</p>
    </div>
  )
}


export default PapaiNoel