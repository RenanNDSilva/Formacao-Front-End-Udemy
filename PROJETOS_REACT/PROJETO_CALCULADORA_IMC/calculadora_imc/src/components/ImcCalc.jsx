import React from 'react'
import './ImcCalc.css'
import Button from './Button'
import { useState } from 'react'

const ImcCalc = ({ calcImc, setImcData }) => {

    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')

    const clearForm = (e) => {
        e.preventDefault()
        setHeight('')
        setWeight('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const imc = calcImc(parseFloat(height), parseFloat(weight))

        if (!imc) {
            return
        }

        setImcData(imc)
    }

    const validDigits = (value) => {
        const regex = /^\d*\.?\d*$/
        return regex.test(value)
    }

    return (
        <div id='calc-container'>
            <h2>Calculadora de IMC</h2>
            <form action="" id='imc-form' onSubmit={handleSubmit}>
                <div className='form-inputs'>
                    <div className="form-control">
                        <label htmlFor="height">Altura:</label>
                        <input type="text" id='height' name='height' placeholder='Exemplo: 1,75m' value={height} onChange={(e) => {
                            if (validDigits(e.target.value)) {
                                setHeight(e.target.value)
                            }
                        }} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="weight">Peso:</label>
                        <input type="text" id='weight' name='weight' placeholder='Exemplo: 70,5kg' value={weight} onChange={(e) => {
                            if (validDigits(e.target.value)) {
                                setWeight(e.target.value)
                            }
                        }} />
                    </div>
                </div>
                <div className="action-control">
                    <Button id="calc-btn" text="Calcular" type="submit" />
                    <Button id="clear-btn" text="Limpar" type="button" onClick={clearForm} />
                </div>
            </form>
        </div>
    )
}

export default ImcCalc
