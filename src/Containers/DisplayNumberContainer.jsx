import DisplayNumber from '../components/DisplayNumber'
import { connect , Provider } from 'react-redux'


/*
    this.setState({ number : store.getState().number });  
    <DisplayNumber number={this.state.number} >    
    처리     

    state 는 store.state  인가? 

*/
function mapReduxStateToReactProps(state){

    return {
        number : state.number
    }

}

function mapReduxDispatchToReactProps(){
    return {};
}


// export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(DisplayNumber);
export default connect(mapReduxStateToReactProps)(DisplayNumber);


/*
import React, { Component } from 'react'
import store from '../store';

export default class extends Component {

  state = {number : store.getState().number };

  constructor(props){
    super(props);

    store.subscribe(function(){
       console.log('DisplayNumberC store ', store.getState().number );
       this.setState({ number : store.getState().number });      
    }.bind(this));
  }

  render() {

    console.log('DisplayNumberC ', this.state.number);

    return (
      <DisplayNumber number={this.state.number} >        
      </DisplayNumber>
    )
  }
}
*/
