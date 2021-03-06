import React from 'react'
import { Container, Card, CardDeck}  from 'react-bootstrap'

function EventCard(props) {
    return (
        <Container>
            <CardDeck>
                <Card border="dark" style={{ height: '16rem' }}>
                    <Card.Img style={{ height: '95px', width: '190px' }} variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title style={{ fontWeight: 'bolder' }}>Artist</Card.Title>
                        <Card.Text>
                            {props.name}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="dark" style={{ height: '16rem' }}>
                    <Card.Img variant="top" src="https://www.coldharbourrecordings.com/wp-content/uploads/2014/07/EVENTSTOP2-940x470.jpg" />
                    <Card.Body>
                        <Card.Title style={{ fontWeight: 'bolder' }}>Venue</Card.Title>
                        <Card.Text>
                            {props.venue}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="dark" style={{ height: '16rem' }}>
                    <Card.Img variant="top" src="https://blog.hootsuite.com/wp-content/uploads/2017/06/social-media-content-calendar-940x470.jpg" />
                    <Card.Body>
                        <Card.Title style={{ fontWeight: 'bolder' }}>Date</Card.Title>
                        <Card.Text>
                            {props.date}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="dark" style={{ height: '16rem' }}>
                    <Card.Img variant="top" src="https://sosyalmedya.co/wp-content/uploads/2016/08/pexels-photo-100733-large-940x470.jpeg" />
                    <Card.Body>
                        <Card.Title style={{ fontWeight: 'bolder' }}>Time</Card.Title>
                        <Card.Text>
                            8:00pm
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="dark" style={{ height: '16rem' }}>
                    <Card.Img variant="top" src="https://www.penpointefilms.com/wp-content/uploads/2019/02/ShowImage-940x470.jpg" />
                    <Card.Body>
                        <Card.Title style={{ fontWeight: 'bolder' }}>City</Card.Title>
                        <Card.Text>
                            {props.city}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Container>
    );
}

export default EventCard;
