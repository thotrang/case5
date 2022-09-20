import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

export default function Feed(propt) {
    const posts = propt.post
    return (
    <div className="feed">
      <div className="feedWrapper">
        {propt.isShare && <Share myAvatar={propt.myProfile}/>}
         {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
