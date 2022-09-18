import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

export default function Feed(props) {
    const posts = props.post.posts
    // console.log(Posts, "....")

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
         {Posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
