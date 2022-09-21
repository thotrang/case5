import { Avatar } from "@mui/material";
import "../post.css";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCommentPost } from "../../../service/postService";
import { myProfile } from "../../../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";


export default function Comments({ post }) {
    const [comment, setComment] = useState('');
    const user = useSelector(myProfile)
    const dispatch = useDispatch();

    const handleComment = (event) => {
        event.preventDefault()
        dispatch(updateCommentPost({ id: post._id, comment: { user: user, text: comment } }))
        setComment("")
    }
    console.log(post.comment[0]);
    return (
        <div>
            {post.comment.map((comment, index) => (
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "5px" }} key={index} >
                    <div width={"60%"}>
                        <img style={{ borderRadius: "20px", width: "35px" }} src={(post.userId.avatar) ? post.userId.avatar : 'https://1.bigdata-vn.com/wp-content/uploads/2021/10/TOP-999-hinh-anh-tho-Chibi-dep-de-thuong-lam.jpg'} />
                    </div>
                    <div style={{width:"19%", display: "flex", flexDirection: "column", marginLeft: "10px" }}>
                        <div style={{ fontWeight: "600" }}><span>{comment?.comment?.user?.name}</span></div>
                    </div>

                    <div>
                        <div>{comment?.comment?.text}</div>
                    </div>
                </div>

            )
            )}

            <form style={{ display: "flex", flexDirection: "row" }} onSubmit={handleComment}>
                <Avatar src={(post.userId.avatar) ? post.userId.avatar : 'https://1.bigdata-vn.com/wp-content/uploads/2021/10/TOP-999-hinh-anh-tho-Chibi-dep-de-thuong-lam.jpg'} />
                <input type="text" value={comment} placeholder={"Write comment ...."} className={"comments"} onChange={e => setComment(e.target.value)} />
                <span className="send-Button" onClick={handleComment}><SendIcon /></span>
            </form>
        </div>

    )
}