import React from 'react'

const Data = () => {
    let someData = 10;

    const [anotherNumber, setAnotherNumber] = React.useState(20);
    
    return (
        <div>
            <p>Valor: {someData}</p>
            <p>Outro Valor: {anotherNumber}</p>
            <button onClick={() => (someData = 15)}>Mudar Variável</button>
            <button onClick={() => setAnotherNumber(25)}>Mudar Estado</button>
        </div>
    )
}

export default Data
