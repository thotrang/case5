import "./closeFriend.css";
import { Link, useNavigate } from "react-router-dom"
export default function CloseFriend({ user }) {
  const navigate = useNavigate()
  return (
    <Link className="sidebarFriend" to ={`/profile/${user._id}`}>
      <img className="sidebarFriendImg" src={(user.avatar) ? user.avatar : `https://upanh123.com/wp-content/uploads/2020/11/anh-tho-chibi.0.jpg`} alt="" />
      <span className="sidebarFriendName">{user.name}</span>
    </Link>
  );
}
