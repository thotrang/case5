import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import {Link, useNavigate} from "react-router-dom"
import { Users } from "../../dummyData";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import * as React from "react";

export default function Topbar(propt) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      navigate(`/profile/${propt.profile._id}`)
      setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
      navigate("/login")
  };
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
        <span className="topbarLink"
              id="demo-positioned-button"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
        ><img className="myImg" src={(propt.profile.avatar)?propt.profile.avatar:'https://upanh123.com/wp-content/uploads/2020/11/anh-tho-chibi.0.jpg'}/></span>
        
        <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
              }}
              transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
              }}
          >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
      </div>
    </div>
  );
}
