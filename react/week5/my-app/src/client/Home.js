import React from "react";
import context from "./context";

export default function Home() {
  const { handelUserSearch } = React.useContext(context);
  return (
    <div>
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
