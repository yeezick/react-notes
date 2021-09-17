// import { useEffect, useState } from "react";
import Card from "../../UI/Card/Card";
import classes from "./UserList.module.css"

const UserList = (props) => {
  // const [toggleList, setToggleList] = useState(false);

  // const { allUsers } = props;

  return (
    <Card className={classes.users}>
      <ul>
        {props.allUsers.map((user, idx) => (
          <li key={idx}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
