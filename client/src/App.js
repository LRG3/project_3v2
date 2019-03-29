import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from "./pages/Movies";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import API from "./utils/API";
import Friends from "./pages/Friends";

class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
        user: {}
      }
   }
   signIn = (username, password, event, cb) => {
    event.preventDefault();
    if (username && password) {          
      API.verifyCredentials(username, password)
        .then( (res) => {               
          if (res.data.length === 0){
              alert("Invalid Username or Password. Try again!")
          } else {                 
            //   alert("CREDENTIALS VERIFIED ... THIS IS WHERE WE NEED TO MAKE IT LOAD NEW PAGE")
              console.log(res.data)
              this.setState( () => ({user: res.data}), cb)
              // window.location.replace("/movies")
              
              //NEED TO CREATE LOGIC TO SEND USER TO THE MOVIES PAGE AND KEEP THE USERNAME AS THE CURRENT STATE 
          }                             
        })           
        .catch(err => console.log(err));
    }
  };
  render(){
    const {user} = this.state
    console.log(user)
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" render={ (props)=> <Login handleSignIn={this.signIn} {...props} /> } />
            <Route exact path="/signUp" component={SignUp} />          
            <Route exact path="/movies/" render = {(props) => <Movies user={user}{...props}/>} />
            <Route exact path="/movieDetail/:id" component={Detail} />
            <Route exact path="/friends" component={Friends} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
