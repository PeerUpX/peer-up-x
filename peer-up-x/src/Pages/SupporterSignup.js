import React, {useState, useRef} from "react"
import {Form, Card, Alert, Button} from "react-bootstrap"
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import styles from "../Login.module.css";
import { ReactComponent as Logo } from "../peerUpLogo.svg";

export default function SupporterSignup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const schoolRef = useRef()
  const specialtyRef = useRef()
  const nicknameRef = useRef()

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [status, setStatus] = useState("default status");


  async function handleSubmit(e) {
    e.preventDefault();

    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const dict = {"nickname": nicknameRef.current.value, "email": emailRef.current.value, "password": passwordRef.current.value, "school": schoolRef.current.value, "specialty": specialtyRef.current.value};
    const result = await fetch("http://localhost:4000/supporters/register",
      {
        method: 'POST',
        headers: {
          'Content-Type': "application/json; charset=utf-8",
        },
        body: JSON.stringify(dict) /* this is the data being posted */
      })
    const res = await result.json();  /* this is the res sent by the backend */
    console.log(res);

    setStatus(res.message);
  }
  
  return (
    <>
    <Card>
      <Card.Body>
        <h2 className={styles.header2}>Sign Up<Logo /></h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className={styles.form}>
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control type="email" placeholder="Email*" ref={emailRef} required />
          </Form.Group>
          <Form.Group className={styles.form}>
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control type="nickname" placeholder="Your display name*" ref={nicknameRef} required />
          </Form.Group>
          <Form.Group className={styles.form}>
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control type="school" placeholder="School" ref={schoolRef} />
          </Form.Group>
          <Form.Group className={styles.form}>
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control type="specialty" placeholder="Specialty" ref={specialtyRef} />
          </Form.Group>
          <Form.Group className={styles.form}>
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control type="password" placeholder="Password*" ref={passwordRef} required />
          </Form.Group>
          <Form.Group className={styles.form}>
            {/* <Form.Label>Password Confirmation</Form.Label> */}
            <Form.Control type="password" placeholder="Confirm password*" ref={passwordConfirmRef} required />
          </Form.Group>
          <Button disabled={loading} className={styles.button} type="submit" padding="1rem">
            Sign Up
          </Button>
        </Form>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      Already have an account? <Link to ="/login">Log in</Link>
      <br></br>{status}
    </div>
  </>
  );
}