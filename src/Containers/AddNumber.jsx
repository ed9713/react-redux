import AddNumber from '../components/AddNumber'
import { connect , Provider } from 'react-redux'

function mapReduxStateToReactProps(state){

    return {
    }

}

function mapReduxDispatchToReactProps(dispatch){
    // return {
    //     onClick : function(_size){
    //         store.dispatch({ type :'INCREMENT' ,  size : _size  });
    //       }
    // };

    return {
        onClick : function(_size){
            dispatch({ type :'INCREMENT' ,  size : _size  });
          }
    };

}


// export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(AddNumber);
export default connect(null, mapReduxDispatchToReactProps)(AddNumber);


/*
import React, { Component } from 'react'
import store from '../store';

export default class extends Component {
  render() {
    return (
      <AddNumber onClick={function(_size){
        store.dispatch({ type :'INCREMENT' ,  size : _size  });
      }.bind(this)} ></AddNumber>
    )
  }
}
*/
