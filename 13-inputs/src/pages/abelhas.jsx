import React, { useState } from 'react'


function Abelhas() {
  const [inputA, setInputA] = useState('')
  const [inputB, setInputB] = useState('')
  const [resultado, setResultado] = useState(
    'Digite os preços e aperte o botão'
  )


  function calcularAumento() {
    let A = Number(inputA.replace(',', '.'))
    let B = Number(inputB.replace(',', '.'))


    if (A <= 0 || B < A) {
      setResultado('Digite preços válidos!')
      return
    }


    let porcentagem = ((B - A) / A) * 100


    setResultado(
      porcentagem.toFixed(2).replace('.', ',') + '%'
    )
  }


  return (
    <div className="Abelhas">
      <h1>Abelhas - Aumento do Ingresso</h1>


      <label htmlFor="antigo">
        Preço antigo do ingresso (A):
      </label>


      <input
        id="antigo"
        type="text"
        value={inputA}
        onChange={(e) => setInputA(e.target.value)}
        placeholder="Ex: 20,00"
      />


      <label htmlFor="novo">
        Preço novo do ingresso (B):
      </label>


      <input
        id="novo"
        type="text"
        value={inputB}
        onChange={(e) => setInputB(e.target.value)}
        placeholder="Ex: 30,00"
      />


      <button onClick={calcularAumento}>
        Calcular aumento
      </button>


      <p>{resultado}</p>
    </div>
  )
}


export default Abelhas