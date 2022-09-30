import React from "react";
import { useSelector } from "react-redux";

function Users() {
  const users = useSelector((state) => state.users);
  return (
    <div>
      <ul>
        Users!
        {users.map((user) => (
          <li>{user.username}</li>
        ))}
      </ul>
      {users.length}
    </div>
  );
}

export default Users;
