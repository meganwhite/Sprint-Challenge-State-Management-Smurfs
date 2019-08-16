import React, { Component } from "react";
import Smurfs from './Smurfs'
import FormikUserForm from './SmurfForm'

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the Smurf Village!</h1>
        <Smurfs />
        <FormikUserForm />
      </div>
    );
  }
}

export default App; 
