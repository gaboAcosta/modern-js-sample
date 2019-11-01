import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function() {
  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Home</h1>
      </Jumbotron>
    </Container>
  )
}