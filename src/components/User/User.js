import React from "react";

const Users = ({ user }) => {
  return (
    <div>
      <ul>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Role: {user.role}</li>
      </ul>
    </div>
  );
};

export default Users;
