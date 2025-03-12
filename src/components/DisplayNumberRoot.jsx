import React, { Component } from 'react';
import DisplayNumber from './DisplayNumber';


class DisplayNumberRoot extends Component {

   //  console.log(this.props.number);

    render() {
      return (
        <div>
          <h1>Display Number Root 2-1</h1>
          <DisplayNumber number={this.props.number}></DisplayNumber>
        </div>
      )
    }
}  

export default DisplayNumberRoot;
