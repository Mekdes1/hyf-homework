import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "./count";
import TodoList from "./render";

const root = document.getElementById("root");

class TodoItems extends React.Component {
  render() {
    return <Counter />;
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TodoItems />
        <TodoList />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, root);
