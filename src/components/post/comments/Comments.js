import {Avatar} from "@mui/material";
import "../post.css";
import SendIcon from '@mui/icons-material/Send';


export default function Comments(){
    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <Avatar src={ "https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg"}/>
            <input type="text" placeholder={"Write comment ...."} className={"comments"}/>
            <span className="send-Button" ><SendIcon/></span>
        </div>
    )
}