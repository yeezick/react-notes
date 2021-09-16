import {useEffect, useState} from "react"
import Card from "../../UI/Card/Card";

const UserList = (props) => {
  // const [toggleList, setToggleList] = useState(false);

  const {allUsers} = props;

  return (
    <div>
      {/* {allUsers?.map(user => (
        <UserCard username={user.username} age={user.age} />
      ))} */}
    </div>
  )
}

export default UserList
