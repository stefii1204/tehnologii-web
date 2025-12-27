import { useEffect, useState } from 'react'
import User from './User'
import UserForm from './UserForm'
import UserDetails from './UserDetails'
import './UserList.css'

const SERVER = 'http://localhost:8080'

function UserList(props) {
    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState(null)

    const getUsers = async () => {
        const response = await fetch(`${SERVER}/users`)
        const data = await response.json()
        setUsers(data)

        if (selectedUser) {
            const updated = data.find(u => u.id === selectedUser.id)
            setSelectedUser(updated || null)
        }
    }

    const addUser = async (user) => {
        await fetch(`${SERVER}/users`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        getUsers()
    }

    const handleSelectUser = (user) => {
        setSelectedUser(user)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className='user-list'>
            {users.map(u => (
                <User
                    key={u.id}
                    item={u}
                    onSelect={handleSelectUser}
                    isSelected={selectedUser?.id === u.id}
                />
            ))}

            <UserForm onAdd={addUser} />

            <UserDetails user={selectedUser} />
        </div>
    )
}

export default UserList
