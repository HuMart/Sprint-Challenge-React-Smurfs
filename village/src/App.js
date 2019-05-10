import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { NavLink, Rout} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      newSmurf: {
        name:'',
        age:'',
        height:'',
      }
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
componentDidMount() {
  axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        this.setState({
          smurfs: res.data,
        })
      })
      .catch(err => {
        console.log('err', err);
      })
}

  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />
        <NavLink to='/'>List of Smurfs</NavLink>
        <NavLink to='/smurf-form'> New Smurf Form</NavLink>
      </div>
    );
  }
}

export default App;
