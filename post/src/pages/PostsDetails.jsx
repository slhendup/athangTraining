import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getComments, getPost } from "../services/Api.config";

const Comment = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [comments, setComment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchComment = async () => {
      setLoading(true);
      try {
        const fetchPost = await getPost(id);
        setPosts(fetchPost.data);
        const fetchComment = await getComments(id);
        setComment(fetchComment.data);
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setLoading(false);
    };
    fetchComment();
  }, [id]);

  if (loading) {
    return <div>Page loading</div>;
  }
  if (!posts) {
    return <div>Failed to load post or comments </div>;
  }
  if (error) {
    return <div>Not found </div>;
  }

  return (
    <div>
      <h1>{posts.title}</h1>
      <h5>{posts.body}</h5>
      <h2> comments </h2>
      <div>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <h4>{comment.name}</h4>
              <p>{comment.body}</p>
              <p>{comment.email}</p>
            </li>
          ))}
        </ul>
        <Link to="/">
          <h2>&larr; Back to Posts</h2>
        </Link>
      </div>
    </div>
  );
};

export default Comment;
