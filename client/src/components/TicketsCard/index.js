import React from 'react'
import { Container, Card, CardDeck, Button } from 'react-bootstrap'

function TicketsCard(props) {
    return (
        <Container>
            <CardDeck>
                <Card>
                    <Card.Img style={{ height: '12.5vw', width: '25vw'}} variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title style={{ fontWeight: 'bolder' }}>{props.service}</Card.Title>
                        
                            <div className="content">
                                <ul>
                                    <li>
                                        <strong>Low Price:</strong> {props.lowPrice}
                                    </li>
                                    <li>
                                        <strong>High Price:</strong> {props.highPrice}
                                    </li>
                                    <li>
                                        <Button variant="warning" href={props.link}>View Tickets</Button>
                                    </li>
                                </ul>
                            </div>
                        
                    </Card.Body>
                </Card>
            </CardDeck>
        </Container>
    );
}

export default TicketsCard;
