import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, Outlet } from 'react-router-dom'
import {useAuth} from './contexts/AuthContext'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

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

/*
        <Router>
        <div>
            <h1>{currentUser.email}</h1>
            <Button variant="link" onClick={handleLogout}>Logout</Button>
            <Outlet />
        </div>
        </Router>
*/