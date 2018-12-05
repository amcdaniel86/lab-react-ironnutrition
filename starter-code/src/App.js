import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './FoodBox';
import Main from './Main';



class App extends Component {
  render() {
    return (
      <div className="App">
        
        <FoodBox />
        {/* <FoodBox /> establishes parent child relationship between 2 components.  */}

      </div>
    );
  }
}

export default App;
