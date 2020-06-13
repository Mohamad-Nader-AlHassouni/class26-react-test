import React from "react";

const UsersList = ({ usersList, onClick }) => {
  return (
    <ul>
      {usersList.map((user, i) => (
        <li onClick={() => onClick(user.email)} key={i}>
          {user.name.title}. {user.name.first} {user.name.last}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
