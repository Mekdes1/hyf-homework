import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const root = document.getElementById("root");

/* Todo List

* Get out of bed, Wed Sep 13 2017
* Brush teeth, Thu Sep 14 2017
* Eat breakfast, Fri Sep 15 2017 */

const todo = [
  {
    description : " Get out of bed",
    deadline : " Wed Sep 13 2017"
  },
  {
    description : "Brush teeth",
    deadline : " Thu Sep 14 2017"
  },

  {
    description : "Eat breakfast",
    deadline : "Fri Sep 15 2017 "
  }
];
class Head extends React.Component {
  render() {

    return <h1>Todo List</h1>
  }

}

function MyTodo(props) {
  const list = props.list;
  const myToDoList = list.map(tasks => {
    return (
      <li>
        {tasks.description} , {tasks.deadline}
      </li>
    );
  });
  return <ul>{myToDoList}</ul>;
}

class Footer extends React.Component {
  render() {
    return <h3>This is your list</h3>;
  }
}

ReactDOM.render(
  <div className="container">
    <Head />
    <MyTodo list={todo} />
    <Footer />
  </div>,
  root
);
