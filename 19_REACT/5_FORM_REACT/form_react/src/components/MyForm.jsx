import React from 'react'
import './MyForm.css'
import { useState } from 'react'

const MyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        biography: '',
        role: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const submittedData = { ...formData }
        console.log(submittedData)
        // Limpar o formulário
        setFormData({
            name: '',
            email: '',
            biography: '',
            role: '',
        })
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder='Digite seu nome' value={formData.name} onChange={handleChange} />
                </div>
                <label htmlFor="email">
                    <span>Email:</span>
                    <input type="text" id="email" name='email' placeholder='Digite o seu e-mail' value={formData.email} onChange={handleChange} />
                </label>
                <label htmlFor="biography">
                    <span>Biografia:</span>
                    <textarea name="biography" id="biography" placeholder='Digite sua biografia' value={formData.biography} onChange={handleChange}></textarea>
                </label>
                <label htmlFor="role">
                    <span>Função:</span>
                    <select name="role" id="role" onChange={handleChange} value={formData.role}>
                        <option value="">Selecione um papel</option>
                        <option value="developer">Desenvolvedor</option>
                        <option value="designer">Designer</option>
                        <option value="manager">Gerente</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm
