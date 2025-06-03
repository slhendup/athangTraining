import axios from "axios";

// Create an axios instance
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // base URL for all API requests
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 500,
});

// Get all posts
export const getPosts = () => api.get("/posts");
// Get a single post
export const getPost = (id) => api.get(`/posts/${id}`);
// Get comments for a post
export const getComments = (id) => api.get(`/posts/${id}/comments`);

export default api;
