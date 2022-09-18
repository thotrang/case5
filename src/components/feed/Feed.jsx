import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

export default function Feed(propt) {
    const posts = propt.post.posts

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share  myAvatar={propt.myAvatar ? propt.myAvatar : `https://upanh123.com/wp-content/uploads/2020/11/anh-tho-chibi.0.jpg`} />
         {posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))}
      </div>
    </div>
  );
}
