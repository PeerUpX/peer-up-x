//import styled from 'styled-components'
import {React, useRef, useState} from "react"
import { Form, Card, Button } from "react-bootstrap"
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
//import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import styles from "../Login.module.css";
import { ReactComponent as Logo } from "../peerUpLogo.svg";

export default function SupporterLogin() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState("");
  //const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  let loginState = "";
  const [status, setStatus] = useState("default status");
  //const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    console.log({"email": emailRef.current.value, "password": passwordRef.current.value});
    const result = await fetch("http://localhost:4000/supporters/login",
      {
        method: 'POST',
        headers: {
          'Content-Type': "application/json; charset=utf-8",
        },
        body: JSON.stringify({"email": emailRef.current.value, "password": passwordRef.current.value}) /* this is the data being posted */
      })
    const res = await result.json();  /* this is the res sent by the backend */
    console.log(res);

    setStatus(res.message);
  }
  
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className={styles.header2}>PeerUp <Logo /></h2>
          <form onSubmit={handleSubmit}>
            <Form.Group className={styles.form}>
              <Form.Control type="email" placeholder="Email" ref={emailRef} required />
            </Form.Group>
            <Form.Group className={styles.form}>
              <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
            </Form.Group>
            <Button className={styles.button} type="submit" padding="1rem">
              Log in
            </Button>
          </form>

          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
            <br></br>
            <Link to="/forgot-password">{status}</Link>
            
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
}