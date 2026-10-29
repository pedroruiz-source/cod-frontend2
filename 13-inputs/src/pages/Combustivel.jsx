import React, { useState } from 'react'


function Combustivel() {
  const [inputCodigo, setInputCodigo] = useState('')
  const [alcool, setAlcool] = useState(0)
  const [gasolina, setGasolina] = useState(0)
  const [diesel, setDiesel] = useState(0)
  const [resultado, setResultado] = useState(
    'Digite o código do combustível'
  )


  function registrarCombustivel() {
    let codigo = Number(inputCodigo)


    if (codigo === 1) {
      setAlcool(alcool + 1)
      setResultado('Álcool registrado!')
    } else if (codigo === 2) {
      setGasolina(gasolina + 1)
      setResultado('Gasolina registrada!')
    } else if (codigo === 3) {
      setDiesel(diesel + 1)
      setResultado('Diesel registrado!')
    } else if (codigo === 4) {
      setResultado(
        MUITO `OBRIGADO\nÁlcool: ${alcool}\nGasolina: ${gasolina}\nDiesel: ${diesel}`
      )
    } else {
      setResultado('Código inválido! Digite um número de 1 a 4.')
    }


    setInputCodigo('')
  }


  return (
    <div className="Combustivel">
      <h1>Tipo de combustível</h1>


      <label htmlFor="codigo">
        Digite o código (1-Álcool, 2-Gasolina, 3-Diesel, 4-Fim):
      </label>


      <input
        id="codigo"
        type="number"
        value={inputCodigo}
        onChange={(e) => setInputCodigo(e.target.value)}
      />


      <button onClick={registrarCombustivel}>
        Registrar
      </button>


      <p style={{ whiteSpace: 'pre-line' }}>{resultado}</p>
    </div>
  )
}


export default Combustivel
