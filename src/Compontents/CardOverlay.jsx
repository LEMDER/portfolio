import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import first from './Nvidia.jpg';
import second from './kidarts.jpg';
import thirth from './triders.jpg';
import canva from './canva.jpg';

export default class CarouselBox extends Component {
    render() {

        return(

            <>

            <Container style= {{width:'960px'}}>
                <h2 className="mt-3">Overlays</h2>
            </Container>

            <Container style= {{width:'960px'}}>
                <Card className="bg-dark text-white mt-2">
                <Card.Img src={canva} alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>Birthday Party</Card.Title>
                </Card.ImgOverlay>
                </Card> 
            </Container>

            <Container style= {{width:'960px'}}>
                <Card className="bg-dark text-white mt-5">
                <Card.Img src={second} alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>KidsArt</Card.Title>
                </Card.ImgOverlay>
                </Card> 
            </Container>

            <Container style= {{width:'960px'}}>
                <Card className="bg-dark text-white mt-5">
                <Card.Img src={thirth} alt="Card image" />
                <Card.ImgOverlay>
                <Card.Title>Tride</Card.Title>
                </Card.ImgOverlay>
                </Card> 
            </Container>

            <Container style= {{width:'960px'}}>
                <p className="mt-5">©Midjourney 2022 | All rights reserved.</p>
            </Container>
            </>
            
        );
    }

}    