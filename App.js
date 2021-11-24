import logo from './logo.svg';
import React from 'react';
import './App.css';


export default class Td3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false, count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {


    this.setState({ count: this.state.count + 1 })



  }
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>clickez ici</button>
      </>
    );

  }
}

