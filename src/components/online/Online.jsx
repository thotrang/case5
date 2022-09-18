import "./online.css";
import AvatarOnline from "./Avatar";

export default function Online({user}) {
  return (
    <li className="rightbarFriend">

        <AvatarOnline avatar={user.profilePicture} />
        {/*<span className="rightbarOnline"></span>*/}
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}
