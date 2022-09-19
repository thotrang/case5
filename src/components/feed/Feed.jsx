import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

export default function Feed(propt) {
    const posts = propt.post.posts

    return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
         {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
