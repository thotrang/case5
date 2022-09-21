import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import Comments from "./comment/Comment.js"

export default function Post({ post }) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)
  const [isComment, setIsComment] = useState(false)
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={(post.userId.avatar) ? post.userId.avatar : 'https://1.bigdata-vn.com/wp-content/uploads/2021/10/TOP-999-hinh-anh-tho-Chibi-dep-de-thuong-lam.jpg'}
              alt=""
            />
            <Link className="postUsername" to={`/profile/${post.userId._id}`}>
              {post.userId.name}
            </Link>
            <span className="postDate">{post.dob}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.text}</span>
          <img className="postImg" src={post.image} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon"
              src="https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/like.png"
              onClick={likeHandler} alt="" />
            <img className="likeIcon"
              src="https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/heart.png"
              onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"
              onClick={e => setIsComment(!isComment)}> comments</span>
          </div>

        </div>

      </div>
      {isComment && <Comments post={post}></Comments>}

    </div>
  );
}
