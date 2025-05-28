import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";
import Home from "../pages";
import About from "../pages/about";
import NotFound from "../pages/NotFound";
import Content from "../pages/content";
import Blog from "../pages/blog";
import BlogDetail from "../pages/blog/BlogDetails";
import Profile from "../pages/profile";
import { useAuth } from "../context/AuthContext";
import Login from "../pages/auth/login";

const ProtectedRoute = ({ children }) => {
  const { loggedIn } = useAuth();
  const location = useLocation();

  return loggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ afterLoginGoTo: location }} replace />
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/content" Component={Content} />
      <Route path="/login" Component={Login} />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/blog"
        element={
          <ProtectedRoute>
            <Blog />
          </ProtectedRoute>
        }
      />

      <Route
        path="/blog/:id"
        element={
          <ProtectedRoute>
            <BlogDetail />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
