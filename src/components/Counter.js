import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
  state = {
    counter: 0
  };

  addOne = () => {
    this.setState({
      counter: this.state.counter + 1
    });

  }

  removeOne = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      });
    }

  }

  reset = () => {
    this.setState({
      counter: this.state.counter = 0
    });
    //document.querySelector('.ball').style.backgroundColor = "black";
  }

  render() {
    return (
      <>
        <div className={this.state.counter == 0 ? 'counter zero' :
          this.state.counter % 2 == 0 ? 'counter even' : 'counter odd'
      }>
          <p className="number">{this.state.counter}</p>
        </div>

        <div className="buttons">
          <button className="add button" id="add-button" onClick={this.addOne}>Add</button>
          <button className="remove button" id="remove-button" onClick={this.removeOne}>Remove</button>
          <button className="reset button" id="reset-button" onClick={this.reset}>Reset</button>
        </div>
      </>

    )
  }
}

export default Counter;