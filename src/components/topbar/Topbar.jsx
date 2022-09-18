import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import {Link} from "react-router-dom" 
import { Users } from "../../dummyData";
export default function Topbar(propt) {

  return (

    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">White Rabbit</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
      
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">6</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <span className="topbarLink"><img className="myImg" src={(propt.profile.avatar)?propt.profile.avatar:'https://upanh123.com/wp-content/uploads/2020/11/anh-tho-chibi.0.jpg'}/></span>
      </div>
    </div>
  );
}
