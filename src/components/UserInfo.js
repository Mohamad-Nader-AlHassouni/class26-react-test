import React from "react";

const UserInfo = ({ userInfo }) => {
  return Object.keys(userInfo).length ? (
    <div>
      <img
        src={userInfo.picture.large}
        alt={`${userInfo.name.first} ${userInfo.name.last}`}
      ></img>
      <h1>
        {userInfo.name.title}. {userInfo.name.first} {userInfo.name.last}
      </h1>
      <p>{userInfo.email}</p>
      <p>{userInfo.phone}</p>
      <p>
        {userInfo.location.city}, {userInfo.location.country}
      </p>
    </div>
  ) : null;
};

export default UserInfo;
