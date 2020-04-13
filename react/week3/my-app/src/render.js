import React from "react";

function TodoItem(props) {
  const editstate = props.todos.editstate;
  const details = editstate ? (
    <input
      type="text"
      placeholder="update todo"
      onChange={(event) => {
        const updatedEvent = event.target.value;

        return props.todoUpdated(updatedEvent);
      }}
    />
  ) : (
    ` ${props.todos.description}  ||  ${props.todos.deadline}`
  );
  const isComplete = props.todos.completed;
  return (
    <ul
      id="lists"
      style={{ textDecoration: isComplete ? "line-through" : "none" }}
    >
      <li> {details} </li>
      <input type="checkbox" onChange={props.handelCheckbox}></input>
      <button onClick={props.deleteTodo}> Delete</button>
      <button onClick={props.editTodo}>Edit </button>
      <button onClick={props.updateTodo}> update </button>
    </ul>
  );
}

class TodoList extends React.Component {
  state = {
    listOfTodos: [],
    todoName: "",
    deadlineDate: "",
    updateInput: "",
  };
  todoUpdated = this.todoUpdated.bind(this);
  editTodo = this.editTodo.bind(this);
  removeTodo = this.removeTodo.bind(this);
  handelCheckbox = this.handelCheckbox.bind(this);
  update = this.update.bind(this);

  componentDidMount() {
    const url =
      "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
    fetch(url)
      .then((data) => data.json())
      .then((response) => {
        this.setState({
          listOfTodos: response.map((item) => item),
        });
      });
  }

  addNewTodo(todoName, deadlineDate) {
    const currentDate = new Date();
    const selectedDate = new Date(deadlineDate);

    if (todoName === "" || deadlineDate === "") {
      alert("Input can not be empty");
    } else if (selectedDate < currentDate) {
      alert("please make sure your deadline date is correct");
    } else {
      this.setState({
        listOfTodos: [
          ...this.state.listOfTodos,
          {
            description: todoName,

            completed: false,
            deadline: deadlineDate,
          },
        ],
      });
    }
  }

  todoUpdated(updateValue) {
    this.setState({ updateInput: updateValue });
  }

  update(id) {
    if (this.state.updateInput === "") {
      alert("Input is empty");
    } else {
      this.setState({
        listOfTodos: this.state.listOfTodos.map((task, index) => {
          if (id === index) {
            return {
              ...task,
              description: this.state.updateInput,
              editstate: !task.editstate,
            };
          } else {
            return task;
          }
        }),
      });
    }
  }
  editTodo(id) {
    this.setState({
      listOfTodos: this.state.listOfTodos.map((task, index) => {
        if (id === index) {
          return { ...task, editstate: !task.editstate };
        } else {
          return task;
        }
      }),
    });
  }

  handelCheckbox(id) {
    this.setState({
      listOfTodos: this.state.listOfTodos.map((task, index) => {
        if (id === index) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      }),
    });
  }

  removeTodo(id) {
    this.setState({
      listOfTodos: this.state.listOfTodos.filter((item, index) => {
        return index !== id;
      }),
    });
  }

  render() {
    return (
      <div id="display">
        <h1>TodoList</h1>

        <ul>
          {this.state.listOfTodos.map((task, index) => {
            return (
              <TodoItem
                todos={task}
                key={index}
                deleteTodo={() => this.removeTodo(index)}
                handelCheckbox={() => this.handelCheckbox(index)}
                editTodo={() => this.editTodo(index)}
                updateTodo={() => this.update(index)}
                editstate={this.state.isClicked}
                todoUpdated={this.todoUpdated}
              />
            );
          })}

          <form
            onSubmit={(event) => {
              event.preventDefault();

              this.addNewTodo(this.state.todoName, this.state.deadlineDate);
              this.setState({ todoName: "", deadlineDate: "" });
            }}
          >
            Todo description :{" "}
            <input
              type="text"
              placeholder="New Todo name"
              value={this.state.todoName}
              onChange={(event) => {
                this.setState({
                  todoName: event.target.value,
                });
              }}
            />
            Deadline :{" "}
            <input
              type="date"
              placeholder="New Deadline Date"
              value={this.state.deadlineDate}
              onChange={(event) => {
                this.setState({
                  deadlineDate: event.target.value,
                });
              }}
            />
            <button type="submit">Add new todo</button>
          </form>
        </ul>
      </div>
    );
  }
}

export default TodoList;
