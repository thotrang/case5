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
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllFriendThunk} from "../../service/friendService";
import TopSideBar from "./TopSideBar";


export default function Sidebar(propt) {
  const {friends} = useSelector(state => state.friend);
  const dispatch = useDispatch();
  console.log(friends,"aaaaaaaa")
  // console.log(users, "user");
  useEffect(() => {
    // console.log("1")
    dispatch(getAllFriendThunk());
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {/*<ul className="sidebarList">*/}
        {/*  <li className="sidebarListItem">*/}
        {/*    <RssFeed className="sidebarIcon" />*/}
        {/*    <Link className="sidebarListItemText">Feed</Link>*/}
        {/*  </li>*/}
        {/*  <li className="sidebarListItem">*/}
        {/*    <Chat className="sidebarIcon" />*/}
        {/*    <Link className="sidebarListItemText">Chats</Link>*/}
        {/*  </li>*/}
        {/*  <li className="sidebarListItem">*/}
        {/*    <PlayCircleFilledOutlined className="sidebarIcon" />*/}
        {/*    <Link className="sidebarListItemText">Videos</Link>*/}
        {/*  </li>*/}
        {/*  <li className="sidebarListItem">*/}
        {/*    <Group className="sidebarIcon" />*/}
        {/*    <Link className="sidebarListItemText">Groups</Link>*/}
        {/*  </li>*/}
        {/*  <li className="sidebarListItem">*/}
        {/*    <Bookmark className="sidebarIcon" />*/}
        {/*    <Link className="sidebarListItemText">Bookmarks</Link>*/}
        {/*  </li>*/}
        {/*  <li className="sidebarListItem">*/}
        {/*    <HelpOutline className="sidebarIcon" />*/}
        {/*    <Link className="sidebarListItemText">Questions</Link>*/}
        {/*  </li>*/}
        {/*  <li className="sidebarListItem">*/}
        {/*    <WorkOutline className="sidebarIcon" />*/}
        {/*    <Link className="sidebarListItemText">Jobs</Link>*/}
        {/*  </li>*/}
        {/*  <li className="sidebarListItem">*/}
        {/*    <Event className="sidebarIcon" />*/}
        {/*    <Link className="sidebarListItemText">Events</Link>*/}
        {/*  </li>*/}
        {/*  <li className="sidebarListItem">*/}
        {/*    <School className="sidebarIcon" />*/}
        {/*    <Link className="sidebarListItemText">Courses</Link>*/}
        {/*  </li>*/}
        {/*</ul>*/}
        <TopSideBar/>
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
