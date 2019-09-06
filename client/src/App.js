// import React, { Component } from 'react';
// import AppNavbar from './components/AppNavbar';
// import ShoppingList from './components/ShoppingList';
// import ItemModal from './components/ItemModal';
// import { Container } from 'reactstrap';

// import { Provider } from 'react-redux';
// import store from './store';
// import { loadUser } from './actions/authActions';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// class App extends Component {
//   componentDidMount() {
//     store.dispatch(loadUser());
//   }

//   render() {
//     return (
//       <Provider store={store}>
//         <div className='App'>
//           <AppNavbar />
//           <Container>
//             <ItemModal />
//             <ShoppingList />
//           </Container>
//         </div>
//       </Provider>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Card from './components/Card'
import tickets from "./tickets.json"
import Form from "./components/Form"
import NameCity from "./components/NameCity"
import './App.css'
import Wrapper from './components/Wrapper'
// import EventCard from './components/EventCard'
import axios from "axios"


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

    // axios.post('/api/stubhub/search', { name, city })
    //   .then((result) => {
    //     //access the results here....
    //     console.log(result)
    //   });
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
      <Wrapper>
        {/* <div>
          {this.state.stubhubTickets.map(ticket => (
            <Card
              service={ticket.service}
              image={ticket.image}
              lowPrice={ticket.lowPrice}
              highPrice={ticket.highPrice}
              link={ticket.link}
            />
          ))}
        </div> */}
        <div>
          {this.state.ticketmasterTickets.map((ticket, index) => (
            <Card
              service="TicketMaster"
              //image={ticket.image}
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
              //image={ticket.image}
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
              //image={ticket.image}
              key={index}
              lowPrice={ticket.eventLowPrice}
              highPrice={ticket.eventHighPrice}
              link={ticket.url}
            />
          ))}
        </div>
        <div>
          <NameCity

          />
        </div>

        <div>
          <Card
            service={tickets[0].service}
            image={tickets[0].image}
            lowPrice={tickets[0].lowPrice}
            highPrice={tickets[0].highPrice}
            link={tickets[0].link}
          />
          <Card
            service={tickets[1].service}
            image={tickets[1].image}
            lowPrice={tickets[1].lowPrice}
            highPrice={tickets[1].highPrice}
            link={tickets[1].link}
          />
          <Card
            service={tickets[2].service}
            image={tickets[2].image}
            lowPrice={tickets[2].lowPrice}
            highPrice={tickets[2].highPrice}
            link={tickets[2].link}
          />
        </div>

      </Wrapper>
    </Router>

  )
}
}

export default App
