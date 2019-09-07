import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
//import Card from './components/Card'
import tickets from "./tickets.json"
import Form from "./components/Form"
import './App.css'
import Wrapper from './components/Wrapper'
import EventCard from './components/EventCard'
import axios from "axios"
import TicketsCard from './components/TicketsCard'

class App extends Component {
  state = {
    name: "",
    city: "",
    stubhubTickets: [],
    ticketmasterTickets: [],
    seatgeekTickets: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, city } = this.state;

    axios.post('/api/ticketmaster/search', { name, city })
      .then((result) => {
        //access the results here....
        console.log(result.data);
        const resultsArray = [];
        resultsArray.push(result.data);
        console.log(resultsArray);
        this.setState({
          ticketmasterTickets: resultsArray
        })
      });

    axios.post('/api/seatgeek/search', { name, city })
      .then((result) => {
        //access the results here....
        console.log(result.data);
        const resultsArray = [];
        resultsArray.push(result.data);
        console.log(resultsArray);
        this.setState({
          seatgeekTickets: resultsArray
        })
      });

    axios.post('/api/stubhub/search', { name, city })
      .then((result) => {
        //access the results here....
        console.log(result.data);
        const resultsArray = [];
        resultsArray.push(result.data);
        console.log(resultsArray);
        this.setState({
          stubhubTickets: resultsArray
        })
      });

  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </div>
        <div>
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            name={this.state.name}
            city={this.state.city}
          />
        </div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-lg">
              {this.state.ticketmasterTickets.map((ticket, index) => (
                <EventCard
                  key={index}
                  name={ticket.name}
                  image={ticket.image}
                  venue={ticket.venue}
                  date={ticket.date}
                  time={ticket.time}
                  city={this.state.city}
                />
              ))}
            </div>
          </div>
        </div>
        <br></br>
        <Wrapper>
          {/* <div>
            {this.state.ticketmasterTickets.map((ticket, index) => (
              <Card
                service="TicketMaster"
                image={tickets[0].image}
                key={index}
                lowPrice={ticket.eventLowPrice}
                highPrice={ticket.eventHighPrice}
                link={ticket.url}
              />
            ))}
          </div>
          <div>
            {this.state.stubhubTickets.map((ticket, index) => (
              <Card
                service="StubHub"
                image={tickets[1].image}
                key={index}
                lowPrice={ticket.eventLowPrice}
                highPrice={ticket.eventHighPrice}
                link={ticket.url}
              />
            ))}
          </div>
          <div>
            {this.state.seatgeekTickets.map((ticket, index) => (
              <Card
                service="SeatGeek"
                image={tickets[2].image}
                key={index}
                lowPrice={ticket.eventLowPrice}
                highPrice={ticket.eventHighPrice}
                link={ticket.url}
              />
            ))}
          </div> */}
          <div>
            {this.state.ticketmasterTickets.map((ticket, index) => (
              <TicketsCard
                service="TicketMaster"
                image={tickets[0].image}
                key={index}
                lowPrice={ticket.eventLowPrice}
                highPrice={ticket.eventHighPrice}
                link={ticket.url}
              />
            ))}
          </div>
          <div>
            {this.state.stubhubTickets.map((ticket, index) => (
              <TicketsCard
                service="StubHub"
                image={tickets[1].image}
                key={index}
                lowPrice={ticket.eventLowPrice}
                highPrice={ticket.eventHighPrice}
                link={ticket.url}
              />
            ))}
          </div>
          <div>
            {this.state.seatgeekTickets.map((ticket, index) => (
              <TicketsCard
                service="SeatGeek"
                image={tickets[2].image}
                key={index}
                lowPrice={ticket.eventLowPrice}
                highPrice={ticket.eventHighPrice}
                link={ticket.url}
              />
            ))}
          </div>
        </Wrapper>

      </Router>

    )
  }
}

export default App
