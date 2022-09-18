import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";
import Comments from "./comments/Comments";

export default function Post({ post }) {
    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)
    const [isComment, setIsComment] = useState(false)
    // console.log(isComment, "....")


    const likeHandler =()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            // src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
                            src={"https://upanh123.com/wp-content/uploads/2020/11/anh-tho-chibi.0.jpg"}
                            alt=""
                        />
                        <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    {/*<img className="postImg" src={post.photo} alt="" />*/}
                    <img className="postImg" src={"https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg"} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/like.png" onClick={likeHandler} alt="" />
                        <img className="likeIcon" src="https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/heart.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText" onClick={e => setIsComment(!isComment)}>{post.comment} comments</span>
                    </div>

                </div>
                <br/>
                {isComment && <Comments/>}
            </div>

        </div>
    );
}
