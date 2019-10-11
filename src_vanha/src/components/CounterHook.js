import React, { useState } from 'react';
import './CounterHook.css';

const CounterHook = () => {
  const [count, setCount] = useState(0);

  const addHandler = () => {
    setCount(count + 1);
  }

  const removeHandler = () => {
    count > 0 ? setCount(count - 1) : setCount(0);
  }

  const resetHandler = () => {
    setCount(0);
  }

  return (
    <>
      <div className={count == 0 ? 'counter zero' :
        count % 2 == 0 ? 'counter even' : 'counter odd'
      }>
        <p className="number">{count}</p>
      </div>

      <div className="buttons">
        <button className="add button" id="add-button" onClick={addHandler}>Add</button>
        <button className="remove button" id="remove-button" onClick={removeHandler}>Remove</button>
        <button className="reset button" id="reset-button" onClick={resetHandler}>Reset</button>
      </div>
    </>


    // <>
    //   <div className={this.state.counter == 0 ? 'counter zero' :
    //     this.state.counter % 2 == 0 ? 'counter even' : 'counter odd'
    //   }>
    //     <p className="number">{this.state.counter}</p>
    //   </div>

    //   <div className="buttons">
    //     <button className="add button" id="add-button" onClick={this.addOne}>Add</button>
    //     <button className="remove button" id="remove-button" onClick={this.removeOne}>Remove</button>
    //     <button className="reset button" id="reset-button" onClick={this.reset}>Reset</button>
    //   </div>
    // </>


  )

}

export default CounterHook;