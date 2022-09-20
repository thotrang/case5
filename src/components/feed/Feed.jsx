import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

export default function Feed(propt) {
    const posts = propt.post?.posts

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share myAvatar={propt.myProfile}/>
         {posts?.map((p) => (
          <Post key={p?._id} post={p} />
        ))}
      </div>
    </div>
  );
}
