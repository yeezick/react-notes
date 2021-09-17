import { useState, useEffect } from "react";
import "./App.css";
import AddUser from "./components/user/addUser/AddUser";
import UserList from "./components/user/userList/UserList";

function App() {
  const [allUsers, setAllUsers] = useState([]);

  return (
    <div className="app">
      <AddUser allUsers={allUsers} setAllUsers={setAllUsers} />
      <UserList allUsers={allUsers} />
    </div>
  );
}

export default App;
