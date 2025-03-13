import React, { Component } from 'react';
// import store from '../store';

class DisplayNumber extends Component {
  // state = {number : store.getState().number };
  // constructor(props){
  //   super(props);
  //   store.subscribe(function(){
  //      this.setState({ number : store.getState().number });      
  //   }.bind(this));
  // }


  render() {

   //  console.log("DisplayNumber " , this.state.number , store.getState().number );

    return (    
      <div>
        <h1>Display number2-1-1</h1>
        <input type="text" value={this.props.number} readOnly></input>
          {this.props.abcd}
          {this.props.testxxxx}
       </div>
    )
  }
}

export default DisplayNumber;