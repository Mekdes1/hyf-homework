import React from "react";

class Counter extends React.Component {
  state = { value: 0 };

  componentDidMount() {
    this.timer = setInterval(this.increment, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  increment = () => {
    this.setState((state) => ({ value: state.value + 1 }));
  };

  stop = () => {
    clearInterval(this.timer);
  };

  render() {
    return (
      <div>
        <h1>You have used {this.state.value} seconds on this website</h1>
        <button onClick={this.stop}>Stop count</button>
      </div>
    );
  }
}

export default Counter;
