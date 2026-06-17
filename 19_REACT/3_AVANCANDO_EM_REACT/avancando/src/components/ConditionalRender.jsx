import React from 'react'

const ConditionalRender = () => {
    const x = false;
    const name = "Renan";

    return (
        <div>
            {x && <p>Este parágrafo é exibido apenas se x for true</p>}
            <p>Este parágrafo é exibido sempre</p>
            <p>Nome: {name === "Renan" ? (
                <span>O nome é Renan</span>
            ) : (
                <span>O nome não é Renan</span>
            )}</p>
        </div>
    )
}

export default ConditionalRender
