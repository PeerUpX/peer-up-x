import React, { useEffect, useState } from 'react'
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../peerUpLogo.svg";
import Modal from "../Components/Modal";
// import { Link } from "react-router-dom";

export default function LandingPage() {
  const [show, setShow] = useState(false);
  const [num, setNum] = useState(0);
  const [supporterData, setSupporterData] = useState([]);

  // get request to get all supporters from database
  useEffect(() => {
    console.log(URL)
    fetch('http://localhost:3000/supporters/fetchAll')
    .then(response => response.json())
    .then(data => {
      setSupporterData(data.supporters)
      console.log("fetched")
      console.log(data.supporters)
    })
  }, [])

  // function to check if supporterData was set 
  useEffect(() => {
    console.log(supporterData)
  }, [supporterData])

  return (
    <Container fluid>
      <Row>
        <Col className="bg-secondary py-2 ps-4">
          <Logo></Logo>
        </Col>
      </Row>

      <Row className="ps-5 py-4">
        <Col className="display-6">Available Now</Col>
      </Row>

      <Container>
        <Row>
          {supporterData.map((supporterData, k) => (
            <Col key={k} xs={12} md={4} lg={3}>
              <Card className="text-center mx-2 my-2 ">
                <Card.Body className="" onClick={() => {
                  setShow(true); 
                  setNum(k);
                }}>
                  <Logo></Logo>
                  <Card.Title>{supporterData.nickname}</Card.Title>
                  {/* <Card.Text>{supporterData.languages}</Card.Text> */}
                  <Card.Text>{supporterData.specialty}</Card.Text>
                  <Button variant="secondary"  onClick={() => window.open('https://chat-testerclient.herokuapp.com/')}>Chat Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal data={supporterData[num]} open={show} onClose={() => setShow(false)}>
      </Modal>

      <Row className="ps-5 py-4">
        <Col className="display-6">Available 8-9 PM</Col>
      </Row>
      <Container>
        <Row>
          {supporterData.map((supporterData, k) => (
            <Col key={k} xs={12} md={4} lg={3}>
              <Card className="text-center mx-2 my-2 mb-4">
                <Card.Body className="">
                  <Logo></Logo>
                  <Card.Title>{supporterData.nickname}</Card.Title>
                  {/* <Card.Text>{supporterData.languages}</Card.Text> */}
                  <Card.Text>{supporterData.specialty}</Card.Text>
                  <Button variant="secondary">Chat Unavailable</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
