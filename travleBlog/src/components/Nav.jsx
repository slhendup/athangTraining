import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

const Nav = () => {
  const navigate = useNavigate();
  const { loggedIn, toggleAuth } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const handleAuth = () => {
    if (loggedIn) {
      toggleAuth();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: theme === "dark" ? "black" : "red",
      }}
    >
      <Link
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          textDecoration: "none",
        }}
        to={"/"}
      >
        Home
      </Link>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <Link to={"/contries"}></Link>
        <Link to={"/about"}>About</Link>
       {loggedIn && <Link to={"/profile"}>Profile</Link>}
        <button onClick={handleAuth}>{loggedIn ? "Logout" : "Login"}</button>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
};

export default Nav;
