import './App.css'
import ImcCalc from './components/ImcCalc'
import ImcTable from './components/ImcTable'
import { useState } from 'react'
import { data } from './data/data'

function App() {

  const calculateImc = (height, weight) => {
    if (!height || !weight) {
      alert("Por favor, preencha todos os campos.")
      return
    }
    const weightFloat = Number(String(weight).replace(',', '.'))
    const heightFloat = Number(String(height).replace(',', '.'))
    const imc = weightFloat / (heightFloat * heightFloat)
    setImcData(imc.toFixed(2))
    data.forEach((item) => {
      if (imc >= item.min && imc <= item.max) {
        setImcInfo(item.info)
        setImcInfoClass(item.infoClass)
      }
    })
  }
  const resetCalc = (e) => {
    e.preventDefault()
    setImcData("")
    setImcInfo("")
    setImcInfoClass("")
  }
  const [imcData, setImcData] = useState("")
  const [imcInfo, setImcInfo] = useState("")
  const [imcInfoClass, setImcInfoClass] = useState("")

  return (
    <div className="container">
      {!imcData ? <ImcCalc calcImc={calculateImc} setImcData={setImcData} /> : <ImcTable data={data} imc={imcData} info={imcInfo} infoClass={imcInfoClass} resetCalc={resetCalc} />}
    </div>
  )
}

export default App
