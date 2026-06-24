import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Search = () => {
    const [searchParams] = useSearchParams()
    const queryString = searchParams.toString()
    const url = `http://localhost:3000/products${queryString ? `?${queryString}` : ''}`
    const { data: items } = useFetch(url)
    return (
        <div>
            <h1>Resultados da Pesquisa</h1>
            <ul>
                {items && items.map(product => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>R$ {Number(product.price).toFixed(2)}</p>
                        <Link to={`/products/${product.id}`}>Detalhes</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Search