import { useContext } from "react";
import Post from "./Post";
import { PostList as PostData } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostData);
  
  return (
    <>
      {/* Data fetch hot astana spinner dakhava*/}
      {fetching && <LoadingSpinner />}
      {/* Data fetch hot astana khich show kru nka*/}
      {!fetching && postList.length === 0 && <WelcomeMsg />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
