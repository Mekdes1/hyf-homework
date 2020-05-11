import React from "react";
import context from "./context";
export default function FindUser() {
  const { handelUserSearch } = React.useContext(context);
  const form = (
    <input
      type="text"
      id="userName"
      placeholder="search for user"
      onChange={handelUserSearch}
    />
  );

  return <div>{form}</div>;
}
