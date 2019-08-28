import React from 'react'
import './style.css'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

function EventCard() {
    return (
        <Container>
        <CardDeck>
            <Card>
            <Card.Img variant="top" src="https://static.seattletimes.com/wp-content/uploads/2018/04/173623-780x592.jpg" />
                <Card.Body>
                    <Card.Title>Venue</Card.Title>
                    <Card.Text>
                        Tacoma Dome
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://blog.hootsuite.com/wp-content/uploads/2017/06/social-media-content-calendar-940x470.jpg" />
                <Card.Body>
                    <Card.Title>Date</Card.Title>
                    <Card.Text>
                        09/17/2019
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://sosyalmedya.co/wp-content/uploads/2016/08/pexels-photo-100733-large-940x470.jpeg" />
                <Card.Body>
                    <Card.Title>Time</Card.Title>
                    <Card.Text>
                        8:00pm
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="http://www.simplesend.com/simple/uploadedimages/000397/SeattleKnow.jpg" />
                <Card.Body>
                    <Card.Title>City</Card.Title>
                    <Card.Text>
                        Seattle, WA
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    
                </Card.Footer>
            </Card>
        </CardDeck>
        </Container>
    );
}

export default EventCard;
