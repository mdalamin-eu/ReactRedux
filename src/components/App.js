import React, { Component } from 'react'
import {connect} from 'react-redux'
import  {addAction, subtractAction} from '../components/actions/action'
class  App extends Component
{
  render() {
console.log(this.props)
    return (
      <div>
  <h2>Counter: {this.props && this.props.number}</h2>
      <input type='button' value='add'  onClick={() => this.props.addAction()} />
      <input type='button' value='subtract'  onClick = {() => this.props.subtractAction()} />
  </div>
    );
}
};
function mapStateToProps(state) {
  return {
    number:state.appState.number
  }
}


export default connect(mapStateToProps,{addAction, subtractAction}) (App)