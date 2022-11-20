import React, { Component } from 'react';
import  Carousel  from 'react-bootstrap/Carousel';
import first from '../Assets/london.png'
import second from '../Assets/fordGT.png'
import third from '../Assets/fist.jpg'

export default class CarouselBox extends Component {
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={ first }
                        alt = "cartoon1"
                        height="670"
                    />
                    <Carousel.Caption>
                        <h3>Cartoon one</h3>
                        <p>just annoying words for no reason </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={ second }
                        alt = "cartoon1"
                        height="670"
                    />
                    <Carousel.Caption>
                        <h3>Cartoon two</h3>
                        <p>just annoying words for no reason </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={ third }
                        alt = "cartoon1"
                        height="670"
                    />
                    <Carousel.Caption>
                        <h3>Cartoon three</h3>
                        <p>just annoying words for no reason </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }

}    