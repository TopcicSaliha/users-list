import React, { useState } from "react";
import UserInput from "./components/User/UserInput";
import UsersList from "./components/User/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <React.Fragment>
      <UserInput onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
