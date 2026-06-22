import "./App.css"
import { useFetch } from "./hooks/useFetch"
import { useState } from "react"

const url = "http://localhost:3000/products"

function App() {
  const { data: items, httpConfig, loading, error } = useFetch(url)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const handSubmit = async (e) => {
    e.preventDefault()
    const product = { name, price: Number(price) }
    httpConfig(product, "POST")
    setName("")
    setPrice("")
  }


  return (
    <div className="App">
      <h1>HTTP em React</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>Erro: {error.message}</p>}
      <ul>
        {items && items.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>R$ {Number(product.price).toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handSubmit}>
          <label htmlFor="name">
            <span>Nome:</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label htmlFor="price">
            <span>Preço:</span>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Enviar" />
          {loading && <input type="submit" value="Aguarde" disabled />}
          {!loading && <input type="submit" value="Enviar" />}
        </form>
      </div>
    </div>
  )
}

export default App