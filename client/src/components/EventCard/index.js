import React from 'react'
import './style.css'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

function EventCard() {
    return (
        <CardDeck>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" roundedCircle/>
                <Card.Body>
                    <Card.Title>Venue</Card.Title>
                    <Card.Text>
                        Tacoma Dome
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Date</Card.Title>
                    <Card.Text>
                        09/17/2019
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Time</Card.Title>
                    <Card.Text>
                        8:00pm
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>City</Card.Title>
                    <Card.Text>
                       Seattle, WA
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardDeck>
    );
}

export default EventCard;
