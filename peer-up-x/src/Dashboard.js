import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, Outlet } from 'react-router'
import {useAuth} from './contexts/AuthContext'

export default function Dashboard(){
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const {currentUser, logout} = useAuth();

    async function handleLogout() {
        setError('')

        try {
            await logout()
            navigate("/login")
        } catch {
            setError('Error logging out')
        }
    }

    return(
        <div>
            <h1>{currentUser.email}</h1>
            <Button variant="link" onClick={handleLogout}>Logout</Button>
            <Outlet />
        </div>
    )
}