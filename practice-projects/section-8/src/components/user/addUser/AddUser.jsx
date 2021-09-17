import { useState } from "react";
// components
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";


import classes from "./AddUser.module.css"

const AddUser = (props) => {
  const [newUser, setNewUser] = useState({
    username: "",
    age: "",
  });

  const { username, age } = newUser;

  const inputHandler = (e) => {
    const { id, value } = e.target;
    setNewUser({ ...newUser, [id]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { allUsers, setAllUsers } = props;
    setAllUsers([...allUsers, newUser]);
    setNewUser({ username: "", age: "" });
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={inputHandler}
        />

        <label htmlFor="age">Age:</label>
        <input id="age" type="number" value={age} onChange={inputHandler} />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
