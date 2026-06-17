import React from 'react'

const ChangeMessage = ({handleMessage}) => {
    const messages = [
        "Olá, eu sou a primeira mensagem!",
        "Olá, eu sou a segunda mensagem!",
        "Olá, eu sou a terceira mensagem!"
    ];
  return (
    <div>
      <button onClick={() => handleMessage(messages[0])}>Primeira Mensagem</button>
      <button onClick={() => handleMessage(messages[1])}>Segunda Mensagem</button>
      <button onClick={() => handleMessage(messages[2])}>Terceira Mensagem</button>
    </div>
  )
}

export default ChangeMessage
