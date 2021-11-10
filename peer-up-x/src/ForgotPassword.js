import React, {useState, useRef} from "react"
import {Form, Card, Alert, Button} from "react-bootstrap"
import { useAuth } from './contexts/AuthContext'
import {Link} from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const [error, setError] = useState("");
  const { resetPassword } = useAuth();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your email for a password reset link.");
    } catch {
      setError("Failed to change password");
    }
    //setLoading(false);
  }
  
  return (
    <>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Password Reset</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>
          <Button disabled={loading} className="w-100" type="submit" padding="1rem">
            Reset Password
          </Button>
        </Form>
        <div className="w-100 text-center mt-3">
            <Link to="/login">Log in?</Link>
        </div>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      Need an account? <Link to="/signup">Sign up</Link>
    </div>
  </>
  );
}