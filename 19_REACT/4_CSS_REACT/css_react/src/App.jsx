import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {

  const n = 15
  const redTitle = true

  return (
    <div className="App">
      <h1>CSS no React</h1>
      <MyComponent />
      <p style={{color: "blue"}}>Este elemento tem estilos inline.</p>
      <h2 style={n > 10 ? {color: "red"} : {color: "black"}}>CSS dinâmico</h2>
      <h2 className={redTitle ? "red-title" : "title"}>Este é um título com CSS de componente</h2>
      <Title />
    </div>
  )
} 

export default App