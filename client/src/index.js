import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Header from './components/Header'

const App = () => (
  <div>
    <Header/>
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome To React-Bootstrap</h1>
      </Jumbotron>
    </Container>
  </div>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);