import React, { Component } from "react";
import { Button, Container, Form } from "react-bootstrap";



export default class Contact extends Component {
    render(){
        return(
            <Container Container style= {{width:'1000px'}}>
                <h1>Contact with us</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text>
                            We'll never sharte your email with anyone else
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="3"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckBox">
                        <Form.Check type="checkbox" label = "Check me out" />
                    </Form.Group>

                    <Button variant="primary" type = "submit">Submit</Button>
                   
                </Form>
            </Container>
        )
    }

}