import { Routes, Route } from "react-router-dom";

import "./App.css";
import PostsList from "./pages/PostsList";
import Comment from "./pages/PostsDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/posts/:id" element={<Comment />} />
    </Routes>
  );
};
export default App;

// const PostsList = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     const fetchComment = async () => {
//       setLoading(true);
//       try {
//         const result = await axios.get(
//           `https://jsonplaceholder.typicode.com/posts`
//         );
//         setPosts(result.data);
//       } catch (error) {
//         console.log(error);
//         setError(error);
//       }
//       setLoading(false);
//     };
//     fetchComment();
//   }, []);
//   console.log("i am here", error);
//   if (loading) {
//     return <div>page loading</div>;
//   }

//   if (error) {
//     return <div>not found </div>;
//   }

//   return (
//     <div>
//       <h1>Blog Post !!</h1>
//       {posts.map((post) => {
//         return (
//           <div key={post.id}>
//             <Link to={`/posts/${post.id}`}>
//               <h3>{post.title}</h3> <p>{post.body}</p>
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const Comment = () => {
//   const { id } = useParams();
//   const [posts, setPosts] = useState([]);
//   const [comments, setComment] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     const fetchComment = async () => {
//       setLoading(true);
//       try {
//         const getPost = await axios.get(
//           `https://jsonplaceholder.typicode.com/posts/${id}`
//         );
//         setPosts(getPost.data);
//         const getComment = await axios.get(
//           `https://jsonplaceholder.typicode.com/posts/${id}/comments`
//         );
//         setComment(getComment.data);
//       } catch (error) {
//         console.log(error);
//         setError(error);
//       }
//       setLoading(false);
//     };
//     fetchComment();
//   }, [id]);

//   if (loading) {
//     return <div>Page loading zokhai</div>;
//   }
//   if (!posts) {
//     return <div>Failed to load post or comments </div>;
//   }
//   if (error) {
//     return <div>Not found </div>;
//   }

//   return (
//     <div>
//       <h1>{posts.title}</h1>
//       <h2> comments </h2>
//       <div>
//         <ul>
//           {comments.map((comment) => (
//             <li key={comment.id}>
//               <h4>{comment.name}</h4>
//               <p>{comment.body}</p>
//               <p>{comment.email}</p>
//             </li>
//           ))}
//         </ul>
//         : (<p>No comments found</p>)<Link to="/">&larr; Back to Posts</Link>
//       </div>
//     </div>
//   );
// };
