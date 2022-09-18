import "./closeFriend.css";
import {Avatar} from "@mui/material";

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
        <Avatar alt="Remy Sharp" src={(user.avatar)?user.avatar:`https://upanh123.com/wp-content/uploads/2020/11/anh-tho-chibi.0.jpg`} />
      {/*<img className="sidebarFriendImg" src={(user.avatar)?user.avatar:`https://upanh123.com/wp-content/uploads/2020/11/anh-tho-chibi.0.jpg`} alt="" />*/}
      <span className="sidebarFriendName">{user.name}</span>
    </li>
  );
}
