//import styled from 'styled-components'
import React, {useState, useRef} from "react"
import {Form, Card, Alert, Button} from "react-bootstrap"
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import styles from "../Login.module.css";
import {ReactComponent as Logo} from "../peerUpLogo.svg";

export default function SupporterLogin() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState("");
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  constructor(props)
    {
        super(props);
        this.state = {
            username: "", 
            password: "", 
            loggedIn: false, 
            successCode: 0,
        };
    }

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await fetch("localhost:3000/login", 
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
    
    if(loggedIn == 200)
    {
      console.log("Login Successful")
    }

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      console.log("login success");
      navigate("/dashboard")
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false); 
  }
  
  return (
    <>
    <Card>
      <Card.Body>
        <h2 className={styles.header2}>PeerUp <Logo/></h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form action="localhost:3000/login" onSubmit={handleSubmit}>
          <Form.Group className={styles.form}>
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control type="email" placeholder="Email" ref={emailRef} required />
          </Form.Group>
          <Form.Group className={styles.form}>
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
          </Form.Group>
          <Button disabled={loading} className={styles.button} type="submit" padding="1rem">
            Log in
          </Button>
        </Form>
        <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      Need an account? <Link to="/signup">Sign up</Link>
    </div>
  </>
  );
}



/*const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px;
  padding: 20px 80px 20px 80px;
  border-style: solid;
  border-radius: 4px;
  color: grey;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  border-radius: 4px;
  color: rgb(60, 66, 87);
`;

const Submit = styled.button`
  padding:5px 15px; 
  background:#ccc; 
  border:0 none;
  cursor:pointer;
  border-radius: 5px; 
  margin-top: 10px;
  margin-bottom: 10px;
`*/

/*
    <Container>
      <ColumnContainer>
        <h1>Supporter Signup</h1>
        <p>Username</p>
        <Input type="text" ref={emailRef} required/>
        <p>Password</p>
        <Input type="password" ref={passwordRef} required/>
        <p>Password Confirmation</p>
        <Input type="password" ref={passwordConfirmRef} required/>
        <Submit type="submit">Login</Submit>
      </ColumnContainer>
    </Container> 
*/