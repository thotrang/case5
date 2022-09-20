import {Avatar} from "@mui/material";
import "../post.css";
import SendIcon from '@mui/icons-material/Send';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateCommentPost} from "../../../service/postService";
import {myProfile} from "../../../redux/slice/userSlice";


export default function Comments({post}){
    const [comment, setComment] = useState('');
    const user = useSelector(myProfile)
    const dispatch = useDispatch();


    const handleComment = () => {
        dispatch(updateCommentPost({id: post._id, comment: {user: user, text: comment}}))
        setComment("")
    }

    return (
        <div>
            {post?.comment.map((comment, index) =>(
                <div style={{display: "flex", flexDirection: "row", marginBottom: "5px"}} key={index} >
                    <div>
                        <Avatar src={"https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg"}/>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", marginLeft: "5px"}}>
                        <div style={{fontWeight: "600"}}>{comment?.user?.name}</div>
                        <div>{comment?.text}</div>
                    </div>
                </div>

                )

            )}

            <div style={{display: "flex", flexDirection: "row"}}>
                <Avatar src={ "https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg"}/>
                <input type="text" value={comment} placeholder={"Write comment ...."} className={"comments"} onChange={e => setComment(e.target.value)}/>
                <span className="send-Button" onClick={handleComment}><SendIcon/></span>
            </div>
        </div>

    )
}