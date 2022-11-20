import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import panda from '../Assets/panda.jpg'
import Row from 'react-bootstrap/Row';
import girl from '../Assets/girl.png';
import man from '../Assets/man.png';
import asiangirl from '../Assets/unknown.png';
import afro from '../Assets/afro.png';

export default class Blog extends Component {
    render(){
        return(
            <Container style= {{width:'1600px'}}>
            <Row>
            <Card className="m-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ man } />
            <Card.Body>
              <Card.Title>ph7</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card className="m-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ girl } />
            <Card.Body>
              <Card.Title>Peanut Buddha</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
         
          <Card className="m-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ asiangirl } />
            <Card.Body>
              <Card.Title>nekoryuk</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card  className="m-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ afro } />
            <Card.Body>
              <Card.Title>HoneyWabbit</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Row>
          </Container>
        )
    }

}