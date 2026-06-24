import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import SearchForm from './components/SearchForm.jsx'

function App() {

  return (
    <div className="App">  
      <h1>React Router</h1>
      <Navbar />
      <SearchForm />
      <Outlet />
    </div>
  )
}

export default App
