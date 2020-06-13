import React, { useState } from "react";

import Button from "./components/Button";
import UsersList from "./components/UserList";
import UserInfo from "./components/UserInfo";

import { fetchData } from "./api/index";

import "./App.css";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsersList = async () => {
    setIsLoading(true);
    setUsersList([]);
    setUserInfo({});
    const fetchedData = await fetchData();
    if (fetchedData === null) {
      setError(true);
      setIsLoading(false);
    }
    if (fetchedData) {
      setUsersList(fetchedData);
      setUserInfo(fetchedData[0]);
      setError(false);
      setIsLoading(false);
    }
  };

  const getUserInfo = (email) => {
    const user = usersList.filter((user) => user.email === email);
    setUserInfo(user[0]);
  };

  const spinner = <div className="lds-heart"><div></div></div>;

  return (
    <div>
      <Button onClick={getUsersList}>Get Users!</Button>
      {isLoading && <div>{spinner}</div>}
      {error && <p>something wrong happened!!</p>}
      <UsersList usersList={usersList} onClick={getUserInfo}></UsersList>
      <UserInfo userInfo={userInfo}></UserInfo>
    </div>
  );
}

export default App;
