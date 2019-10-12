import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from "react-redux"
import Actions from "./redux/actions"

import ChildComponent from "./ChildComponent"

class App extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const props = this.props
    props.dispatch(Actions.getList())
  }

  onSelect(event) {
    const name = event.target.value
    this.props.dispatch(Actions.setName(name))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Zen Educate coding challenge</h1>
        </header>

        <div className="container">
          <h2>Questions</h2>
          <p>1. Why isn&#39;t the select tag being filled with options?  Please fix without making the App component stateful.</p>
          <p>2. Once the select tag is being filled with the appropriate options, why isn&#39;t the name being edited within the Child component changing on select?  Please fix without connecting the Child component to the redux store, and without referencing props directly within render.</p>
          <p>3. Ruby on Rails: Create a rails api-only application.  Create an endpoint that sorts (alphabetically) and returns a few instances of a class (in json) for the following names: James, Jono, John, Radu, Cole, and yourself. 1 name per instance please.</p>
          <p>4. Instead of using the mock api-call in the react project, hit your new rails endpoint and prefill the select tag using the json your new endpoint returns.</p>
          <p>5. You&#39;re done.  Commit back to the react project, and invite us (Github usernames: colemerrick, S1rFrancis, zduci) to the rails one.  Thanks!</p>
          <p>6. Suggest any important refactors and why.</p>
        </div>
        {this.props.names.error ?
          <p> There was an internal error, please try later </p> :
          <div>
          <select
            onChange={event => this.onSelect(event)}
            id="selector"
            value={this.props.names.selected_name}>
            {this.props.names.list && this.props.names.list.map(name=><option value={name}>{name}</option>)}
          </select>

          <ChildComponent selected_name={this.props.names.selected_name} />
          </div>
        }


      </div>
    );
  }
}

const mapStateToProps = state => ({
  names: state.names
})

export default connect(mapStateToProps)(App)
