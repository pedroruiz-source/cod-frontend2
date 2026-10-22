import React, { useState } from 'react'

function Demo() {
    const[inputNota1, setInputNota1] = useState ('')
    const[inputNota2, setInputNota2] = useState ('')
    const {resultado, setResultado } = useState ('digite suas notas e aperte o botão')

    function calcularmedia (){
        let Nota1 = Number (inputNota1)
        let Nota2 = Number (inputNota2)
        let media =  (Nota1 * Nota2) / 2
        alert (media)
    }

  return (
    <div className='Demo'>
    <h1>Demo - medias </h1>
     <label htmlFor="">Nota1</label>

    <label htmlFor=""></label>

      <input type="text" 
        value={inputNota1}
        onChange={(e) => setInputNota1(e.target.value)}
      />
     <label htmlFor="">Nota2</label>

      <input type="text" 
        value={inputNota2}
        onChange={(e) => setInputNota2(e.target.value)}
      />
    <button onClick={calcularmedia}>calcular</button>
<p>
    {resultado}
</p>

      </div>
  )
}

export default Demo