// Estado
// O estado representa as características dela naquele momento.

// const App = () =>{
//  const ativo = false
//  return(
//   <button disabled={!ativo}>{ativo ? "Botã ativo" : "Botão inativo"}</button>
//  )
// }

// export default App

//--------------------------------//


// Hooks
// Os hooks são funções especiais do React qeu permitem controlarmos o estado e o ciclo de vida de componentes funcionais

//--------------------------------//

//React.useState
// O React.useState é uma função que retorna um array com 2 valores. O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado com strings,arrays, boolean, null,
// undefined e objetos. O regundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor

import React from "react"

const App = () => {
 const [ativo, setAtivo] = React.useState(true)
 const [contar, setContar] = React.useState(0)
 return(<>
  <button onClick={() => setAtivo(!ativo)}> {ativo ? "Ativo" : "Inativo"}</button>
  <button onClick={() => setContar(contar + 1)}>{contar}</button>
  </>
 )
}

export default App
