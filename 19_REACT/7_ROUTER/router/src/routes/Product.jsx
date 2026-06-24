import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useParams, Link } from 'react-router-dom'

const Product = () => {
    const { id } = useParams()
    const { data: product } = useFetch(`http://localhost:3000/products/${id}`)

    return (
        <div>
            <p>ID do produto: {id}</p>
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>R$ {Number(product.price).toFixed(2)}</p>
                    <Link to={`/products/${product.id}/info`}>Ver mais informações</Link>
                </div>
            )}
        </div>
    )
}

export default Product
