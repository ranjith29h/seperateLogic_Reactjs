import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const actions = {
  init() {
    return { value: 0 };
  },
  increment(state) {
    return { value: state.value + 1 };
  },
  decrement(state) {
    return { value: state.value - 1 };
  }
};

class App extends React.Component {
  state = actions.init();

  handelIncrement = () => {
    this.setState(actions.increment);
  };

  handelDecrement = () => {
    this.setState(actions.decrement);
  };

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>{this.state.value}</p>
        <button onClick={this.handelIncrement}>+</button>
        <button onClick={this.handelDecrement}>-</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
