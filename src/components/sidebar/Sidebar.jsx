import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import {Link} from "react-router-dom"
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar(propt) {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <img className="myImg" src={(propt.myProfile.avatar)?propt.myProfile.avatar:'https://upanh123.com/wp-content/uploads/2020/11/anh-tho-chibi.0.jpg'}/>
            
            <Link className="sidebarListItemText">{propt.myProfile.name}</Link>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <Link className="sidebarListItemText">Chats</Link>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <Link className="sidebarListItemText">Videos</Link>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <Link className="sidebarListItemText">Groups</Link>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <Link className="sidebarListItemText">Bookmarks</Link>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <Link className="sidebarListItemText">Questions</Link>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <Link className="sidebarListItemText">Jobs</Link>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <Link className="sidebarListItemText">Events</Link>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <Link className="sidebarListItemText">Courses</Link>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {propt.listUser.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
