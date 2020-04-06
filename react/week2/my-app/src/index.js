import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "./count";
import TodoList from'./render';

const root = document.getElementById("root");

const  todoList = [
  {
    id: 1,
    description: "Get out of bed"
  },
  {
    id: 2,
    description: "Brush teeth"
  },
  {
    id: 3,
    description: "Eat breakfast"
  }
]

class RenderTodo extends React.Component {
  state = {isShow: true}
 
  render() {
    const { isShow } = this.state;
    

    return (
      <div>
        {isShow ? <Counter /> : <p>nothing to show</p>}
      </div>
   ); 
 
 
  } 
}

class App extends React.Component {
 
render(){
  
    return <div>
     
    <RenderTodo />
    <TodoList />
  </div>
  }
}  



ReactDOM.render(<App />, root);

