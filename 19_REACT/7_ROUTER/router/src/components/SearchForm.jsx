import React from 'react'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {
    const navigate = useNavigate()
    const [query, setQuery] = React.useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?q=${query}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <input type="submit" value="Buscar" />
        </form>
    )
}

export default SearchForm