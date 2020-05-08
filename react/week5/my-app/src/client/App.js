import React, { Component } from "react";
import "./app.css";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useParams,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import context from "./context";
const ContextProvider = context.Provider;

const User = ({ users }) => {
  const { userId } = useParams();
  const user = users.find((user) => user.id === Number(userId));

  return (
    <div className="card">
      <img src={user.avatar_url} alt="user-pic" style={{ width: "100%" }} />

      <a href={user.html_url}> {user.login}</a>

      <Link to={"/"}>
        <button> back home </button>
      </Link>
    </div>
  );
};

class App extends React.Component {
  state = { userName: "", usersList: [], isLoading: false };
  handelUserSearch = this.handelUserSearch.bind(this);

  handelUserSearch(e) {
    const value = e.target.value;

    const URL = `https://api.github.com/search/users?q=${value}`;
    fetch(URL)
      .then((data) => data.json())
      .then((response) => {
        const items = response.items;

        this.setState({
          usersList: items,
          isLoading: true,
        });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const contextValue = {
      handelUserSearch: this.handelUserSearch,
    };

    const searchedUser = this.state.usersList.map((users) => (
      <div key={users.id} className="container">
        <Link key={users.id} to={`/${users.id}`}>
          <ul>
            <li>{users.login}</li>
          </ul>
        </Link>
      </div>
    ));

    const status = this.state.isLoading
      ? "Loading . . ."
      : this.state.usersList.length === 0
      ? "No results"
      : " ";

    const usersFound = this.state.usersList.map((users) => users);

    return (
      <ContextProvider value={contextValue}>
        <BrowserRouter>
          <Switch>
            <Route path="/:userId">
              <User users={usersFound} />
            </Route>
            <Route path="/">
              <Home handelUserSearch={this.handelUserSearch} />
              {status}
              {searchedUser}
            </Route>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    );
  }
}

export default App;
