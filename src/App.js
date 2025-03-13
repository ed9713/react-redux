import React, { Component } from 'react';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';


class App extends Component {

  state = {number:0}

  render() {
    return (
      <div className="App">
        <h1>Root1</h1>
        <AddNumberRoot onClick={function(size){
            this.setState({number : this.state.number + Number(size)}); 
        }.bind(this)}></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
      </div>
    )
  }
}

export default App;
