import React from 'react'
import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "João", "Maria", "José", "Ana"]);
    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 30},
        {id: 2, name: "João", age: 25},
        {id: 3, name: "Maria", age: 28},
        {id: 4, name: "José", age: 35},
        {id: 5, name: "Ana", age: 22},
    ]);
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== randomNumber));
    };

    return (
        <div>
            <h2>Renderização de Listas</h2>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h2>Usuários</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <p>Nome: {user.name} | Idade: {user.age}</p>
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Excluir Usuário Aleatório</button>
        </div>
    )
}

export default ListRender
