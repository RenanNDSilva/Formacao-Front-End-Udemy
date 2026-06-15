import React from 'react'

const Events = () => {

    const handleClick = () => {
        console.log("Testando um evento")
    }

    const renderSomething = (x) => {
        if (x) {
            return <p>Renderizando isso</p>
        } else {
            return <p>Renderizando aquilo</p>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleClick}>Clique aqui</button>
            </div>
            {renderSomething(true)}
        </div>
    )
}

export default Events
