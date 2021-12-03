// import React, { useEffect, useState } from 'react'
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../peerUpLogo.svg";
// import { Link } from "react-router-dom";
export default function LandingPage() {
  // const [supporterData, setSupporterData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //   const response = await fetch('')
  //   const suppData = await response.json()
  //   setSupporterData(suppData.slice(0, 6))
  //         }
  //   fetchData()
  //   }, [])
  const supporterData = [
    {
      name: "Apple",
      languages: "English, French",
      specialty: "studies,anxiety",
    },
    {
      name: "Pear",
      languages: "Hindi, English",
      specialty: "studies,coping,relationships",
    },
    {
      name: "Oolong",
      languages: "English, German",
      specialty: "studies,anxiety",
    },
    {
      name: "Sleepy Bruin",
      languages: "English, Chinese",
      specialty: "studies,coping,relationships",
    },
    {
      name: "Guava",
      languages: "English, Spanish",
      specialty: "academics,coping",
    },
   
  ];

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
                <Card.Body className="">
                  <Logo></Logo>
                  <Card.Title>{supporterData.name}</Card.Title>
                  <Card.Text>{supporterData.languages}</Card.Text>
                  <Card.Text>{supporterData.specialty}</Card.Text>
                  <Button variant="secondary"  onClick={() => window.open('https://chat-testerclient.herokuapp.com/')}>Chat Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

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
                  <Card.Title>{supporterData.name}</Card.Title>
                  <Card.Text>{supporterData.languages}</Card.Text>
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
