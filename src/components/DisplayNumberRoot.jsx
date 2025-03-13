import React, { Component } from 'react';
import DisplayNumber from './DisplayNumber';
import DisplayNumberContainer from '../Containers/DisplayNumberContainer';


class DisplayNumberRoot extends Component {

   //  console.log(this.props.number);

    render() {
      return (
        <div>
          <h1>Display Number Root 2-1</h1>
          <DisplayNumberContainer unit="kg" 
            abcd="abcdddd"
            test="testtest"
            ></DisplayNumberContainer>
        </div>
      )
    }
}  

export default DisplayNumberRoot;
