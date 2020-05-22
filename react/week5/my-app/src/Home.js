import React from "react";
import context from "./context";
import { Link } from "react-router-dom";
export default function Home() {
  const { handelUserSearch } = React.useContext(context);
  return (
    <div>
      <Link to={"/about"}>
        <button> About </button>
      </Link>
      <h1>Github user search</h1>

      <input
        type="text"
        id="userName"
        placeholder="search for user"
        onChange={handelUserSearch}
      />
    </div>
  );
}
