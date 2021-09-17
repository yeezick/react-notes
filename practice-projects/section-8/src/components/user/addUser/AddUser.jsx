import { useState } from "react";
// components
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [newUser, setNewUser] = useState({
    username: "",
    age: "",
  });
  const [error, setError] = useState();

  const { username, age } = newUser;

  const inputHandler = (e) => {
    const { id, value } = e.target;
    setNewUser({ ...newUser, [id]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(age)
    if (username.trim().length === 0 || !age) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid input",
        message: "age cannot be less than 1",
      });
      return;
    }
    const { allUsers, setAllUsers } = props;
    setAllUsers([...allUsers, newUser]);
    setNewUser({ username: "", age: "" });
  };

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} errorHandler={errorHandler}/>}
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
    </div>
  );
};

export default AddUser;
