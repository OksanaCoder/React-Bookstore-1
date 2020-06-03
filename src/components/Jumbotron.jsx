import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const Jumbo = () => {
    return (

        <Jumbotron fluid className="jumb">
        <Container>
          <h1>Wise up</h1>
          <p>
          Where your journey begins...
          </p>
        </Container>
      </Jumbotron>
      

    )
}

export default Jumbo;