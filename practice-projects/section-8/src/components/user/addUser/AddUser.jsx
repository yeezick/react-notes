import { useState } from "react";
import Card from "../../UI/Card/Card";

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
    <Card>
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

        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
