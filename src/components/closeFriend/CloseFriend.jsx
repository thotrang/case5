import "./closeFriend.css";

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={(user.avatar)?user.avatar:`https://upanh123.com/wp-content/uploads/2020/11/anh-tho-chibi.0.jpg`} alt="" />
      <span className="sidebarFriendName">{user.name}</span>
    </li>
  );
}
