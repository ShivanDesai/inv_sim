import React, {Component} from 'react';
import './sass/App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import firebase from 'firebase';

import CustomNavBar from './components/CustomNavBar';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';

class App extends Component {


  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user=>{
      localStorage.setItem('isUserSignedIn', !!user);
      this.setState({loggedIn: !!user});
  });
  }

  state={loggedIn: false}


  render(){
    return (
      <Router>
        <div>
            <CustomNavBar loggedIn={this.state.loggedIn}/>
            <Route exact path="/" component = {Home}/>
            <Route path="/login" render={(props) => (<Login {...props} />)}/>
            <Route path="/logout" component = {Logout}/>
        </div>
      </Router>
    );
  }
}

export default App;
