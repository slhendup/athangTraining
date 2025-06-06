import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { getAllTodos } from "../api/api";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await getAllTodos();
      setTodos(response.data?.todos || []);
    };
    fetchTodos();
  }, []);

  const handleLogout = () => {
    logout();
  };

  const hendleAddTodo = () => {
    setDialogOpen(true);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">SL Todo</div>
        <div className="nav-right">
          <span className="user-info"> {user?.name || "User"}</span>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
      <div className="todo-container">
        <h1>Todo List</h1>
        <button className="add-button" onClick={hendleAddTodo}>
          {" "}
          Add
        </button>
        <ul className="todo-list">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <li key={todo._id} className="todo-item">
                <div>
                  <p className="todo-title">{todo.title}</p>
                  <p>{todo.description}</p>
                  <small>{todo.note}</small>
                  {todo.completed && <p className="completed">Completed</p>}
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button className="update-button"> update</button>
                  <button className="delete-button">Delete</button>
                </div>
              </li>
            ))
          ) : (
            <div style={{ fontSize: "1.8em" }}>
              No todos yet. Create todos first
            </div>
          )}
        </ul>

        {isDialogOpen && (
          <div className="dialog-overlay">
            <div className="dialog">Hi i am dialog</div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
