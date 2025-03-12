import React, { Component } from 'react';

class DisplayNumber extends Component {
  render() {

    console.log(this.props.number)
    return (    

      <div>
        <h1>Display number2-1-1</h1>
        <input type="text" value={this.props.number} readOnly></input>
       </div>
    )
  }
}

export default DisplayNumber;