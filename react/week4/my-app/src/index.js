import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FindUser from "./FindUser";
import context from "./context";

const ContextProvider = context.Provider;

class App extends React.Component {
  state = { usersList: [], isLoading: false };
  handelUserSearch = this.handelUserSearch.bind(this);

  handelUserSearch(e) {
    const value = e.target.value;
    const URL = `https://api.github.com/search/users?q=${value}`;
    fetch(URL)
      .then((data) => data.json())
      .then((response) => {
        const items = response.items;
        console.log(items);
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
    const searchedUser = this.state.usersList.map((user) => (
      <li key={user.id}>
        <img src={user.avatar_url} alt="user-pic" className="img" />
        <p> {user.login} </p>
        <a href={user.html_url}> Visit Profile</a>
      </li>
    ));

    const status = this.state.isLoading
      ? "Loading . . ."
      : this.state.usersList.length === 0
      ? "No results"
      : "";

    const contextValue = {
      handelUserSearch: this.handelUserSearch,
    };

    return (
      <ContextProvider value={contextValue} className="container">
        <div className="container">
          <h1>Github User Search</h1>
          <FindUser searchIs={this.handelUserSearch} />
          <ul>
            {searchedUser}
            <p>{status}</p>
          </ul>
        </div>
      </ContextProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
