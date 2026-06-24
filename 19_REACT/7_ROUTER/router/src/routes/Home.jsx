import React from 'react'
import { useFetch } from '../hooks/useFetch'
const url = "http://localhost:3000/products"
import { Link } from 'react-router-dom'

const Home = () => {
  const { data: items } = useFetch(url)
  return (
    <div>
      <h1>Home</h1>
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

export default Home
