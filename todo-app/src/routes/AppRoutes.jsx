// import Home from "../pages";
// import Login from "../pages/auth/Login";
// import Register from "../pages/auth/Register";
// import { Routes, Route } from "react";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" Component={Home} />
//       <Route path="/login" Component={Login} />
//       <Route path="/register" Component={Register} />
//     </Routes>
//   );
// };
// export default AppRoutes;
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import { useAuth } from "../contexts/AuthContext";
import Loading from "../components/Loading";

const ProtectedRoutes = ({ children }) => {
  const { isLoggedIn, isLoading } = useAuth();
  if (isLoading) {
    return <Loading />;
  }
  if (!isLoading && isLoggedIn) {
    return children;
  }
  return <Navigate to={"/login"} />;
};
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
