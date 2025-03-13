import React, { Component } from 'react';
import store from '../store'

class AddNumber extends Component {

    state = {size:1};

  

  render() {
    return (
      <div>
        <h1>Add number1-1-1</h1>
        <button value="+" onClick={function(){
            this.props.onClick(this.state.size);
            // store.dispatch({ type :'INCREMENT' ,  size : this.state.size  });
        }.bind(this)}>+</button>
        <input type="text" value={this.state.size} onChange={function(e){
            this.setState( {size : e.target.value} );
        }.bind(this)}></input>
      </div>
    )
  }
}

export default AddNumber;