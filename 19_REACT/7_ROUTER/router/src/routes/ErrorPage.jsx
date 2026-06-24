import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <div>
      <h1>Erro 404</h1>
      <p>Página não encontrada.</p>
    </div>
  )
}

export default ErrorPage
