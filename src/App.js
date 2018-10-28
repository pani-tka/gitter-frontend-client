import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Application extends React.Component {
  state = {
    counter: 1,
  }

  increaseCounter = () => this.setState(({ counter }) => ({ counter: counter + 1 }));
  decreaseCounter = () => this.setState(({ counter }) => ({ counter: counter - 1 }));

   NewIncreaseCounter = () => this.setState(({ counter }) => ({ counter: counter + 5 }));
   NewDecreaseCounter = () => this.setState(({ counter }) => ({ counter: counter -5 }));

handleIncreaseClick = e => {
    e.preventDefault();
    e.stopPropagation();
    
   this.increaseCounter();
  }
handleNewIncreaseClick = e => {
    e.preventDefault();
    e.stopPropagation();
    
   this.NewIncreaseCounter();
  }
  
  handleDecreaseClick = e => {
    e.preventDefault();
    e.stopPropagation();
    
    this.decreaseCounter();
    
  }
  handleNewDecreaseClick = e => {
    e.preventDefault();
    e.stopPropagation();
    
    this.NewDecreaseCounter();
    
  }
  render() {
    const { counter } = this.state;

    return (
      <div>
        <h1>{counter}</h1>
        <p>Increase or decrease your counter</p>
        <p>
          <a href="#" onClick={this.handleIncreaseClick}>Increase counter</a>
          <a href="#" onClick={this.handleDecreaseClick}>Decrease counter</a>
          <a href="#" onClick={this.handleNewIncreaseClick}>+5</a>
          <a href="#" onClick={this.handleNewDecreaseClick}>-5</a>
        </p>
      </div>
    );
  }
}

export default Application;
