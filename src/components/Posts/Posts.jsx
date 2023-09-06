import { useSelector } from "react-redux";
import { selectPosts } from "store/selectors/postSelectors";

import Post from "./Post/Post";

export default function Posts() {
  const posts = useSelector(selectPosts);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <Post key={post._id} />
      ))}
    </div>
  );
}
