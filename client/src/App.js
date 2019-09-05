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
// import Form from "./components/Form"
import Search from "./components/Form"
import NameCity from "./components/NameCity"
import './App.css'
import Wrapper from './components/Wrapper'
// import EventCard from './components/EventCard'


class App extends Component {
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
          <Search />
        </div>
        <br></br>
        <Wrapper>
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
