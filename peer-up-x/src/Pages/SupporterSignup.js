import React, {useState, useRef} from "react"
import {Form, Card, Alert, Button} from "react-bootstrap"
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import styles from "../Login.module.css";

export default function SupporterSignup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  constructor(props)
    {
        super(props);
        this.state = {
            name: "", 
            username: "", 
            password: "", 
            password_confirm: "", 
            isSignedUp: false,
            loggedIn: false,
            successCode: 0, 
        };
    }

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await fetch("localhost:3000/register", 
    {
      method: 'POST',
      headers: {
          'Content-Type': "application/json; charset=utf-8",
      },
      body: JSON.stringify(this.state) /* this is the data being posted */
    })
    
    const res = await result.json();  /* this is the res sent by the backend */
  
    console.log(res);
        
    const loggedIn = res.successCode;
    
    if(loggedIn == 201)
    {
      console.log("Register Successful")
    }

    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    } 

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard")
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }
  
  return (
    <>
    <Card>
      <Card.Body>
        <h2 className={styles.header3}>Sign Up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form action="localhost:3000/register" onSubmit={handleSubmit}>
          <Form.Group className={styles.form}>
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control type="email" placeholder="Email" ref={emailRef} required />
          </Form.Group>
          <Form.Group className={styles.form}>
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
          </Form.Group>
          <Form.Group className={styles.form}>
            {/* <Form.Label>Password Confirmation</Form.Label> */}
            <Form.Control type="password" placeholder="Confirm password" ref={passwordConfirmRef} required />
          </Form.Group>
          <Button disabled={loading} className={styles.button} type="submit" padding="1rem">
            Sign Up
          </Button>
        </Form>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      Already have an account? <Link to ="/login">Log in</Link>
    </div>
  </>
  );
}

