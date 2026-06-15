import React from 'react'

const TemplateExpression = () => {

    const name = "João";
    const data = {
        age: 30,
        city: "São Paulo",
        job: "Desenvolvedor"
    }

    return (
        <div>
            <p>O nome é: {name}</p>
            <p>A soma de 5 e 3 é: {5 + 3}</p>
            <p>A idade é: {data.age}</p>
            <p>A cidade é: {data.city}</p>
            <p>O cargo é: {data.job}</p>
        </div>
    )
}

export default TemplateExpression
