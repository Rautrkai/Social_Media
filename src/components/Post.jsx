import { MdDelete } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <MdDelete />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="badge rounded-pill text-bg-primary hashtag"
          >
            {tag}
          </span>
        ))}
        <div className="reactions">
          <GiSelfLove />
          <p>This post has been reacted by {post.reactions} people </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
