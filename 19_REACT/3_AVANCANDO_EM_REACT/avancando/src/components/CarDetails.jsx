import React from 'react'

const CarDetails = ({ brand, km, color }) => {
    return (
        <div>
            <h2>Detalhes do Carro:</h2>
            <p>Marca: {brand}</p>
            <p>Km: {km}</p>
            <p>Cor: {color}</p>
        </div>
    )
}

export default CarDetails
