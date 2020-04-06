import React from "react";
const list = [
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
  },

  {
    id: 4,
    description: "Go for a walk"
  },

  {
    id: 5,
    description: "Finish homework "
  }
];
function RenderList(props) {
  const isComplete = props.todos.completed;
  return (
    <li style={{ textDecoration: isComplete ? "line-through" : "none" }}>
      {props.todos.description}

      <input type="checkbox" onChange={props.handelCheckbox}></input>
      <button onClick={props.deleteTodo}> Delete</button>
    </li>
  );
}

class TodoList extends React.Component {
  state = {
    listOfTodos: []
  };

  addTodo = this.addTodo.bind(this);
  removeTodo = this.removeTodo.bind(this);
  handelCheckbox = this.handelCheckbox.bind(this);

  addTodo() {
    const listIs = list.map(item => {
      return item;
    });

    this.setState({
      listOfTodos: [
        ...this.state.listOfTodos,
        list[Math.floor(Math.random() * list.length)]
      ]
    });
  }

  handelCheckbox(Index) {
    this.setState({
      listOfTodos: this.state.listOfTodos.map(task => {
        if (Index === task.id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    });
  }

  removeTodo(Index) {
    this.setState({
      listOfTodos: this.state.listOfTodos.filter(item => {
        return item.id !== Index;
      })
    });
  }

  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <ul>
          {this.state.listOfTodos.map(task => {
            return (
              <RenderList
                todos={task}
                deleteTodo={() => this.removeTodo(task.id)}
                handelCheckbox={() => this.handelCheckbox(task.id)}
              />
            );
          })}

          <button onClick={this.addTodo}> Add to do</button>
        </ul>
      </div>
    );
  }
}

export default TodoList;
