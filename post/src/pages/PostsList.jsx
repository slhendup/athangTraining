import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../services/Api.config";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const result = await getPosts();
        setPosts(result.data);
        setFilteredPosts(result.data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleSearch = () => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  if (loading) {
    return <div>Loading page...</div>;
  }

  if (error) {
    return <div>Error loading posts.</div>;
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      <input
        placeholder="Search posts"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <div key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </Link>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default PostsList;
