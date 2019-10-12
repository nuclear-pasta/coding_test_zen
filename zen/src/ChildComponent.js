import React, { Component } from 'react';

class ChildComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selected_name: this.props.selected_name
    }
  }



  componentWillReceiveProps(props){
    this.setState({
      selected_name: props.selected_name
    })
  }

  render() {
    return (
      <h3>Name being edited: {this.state.selected_name}</h3>
    );
  }
}

export default ChildComponent
