import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [note, setNote] = useState("");
  //   const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("lwp-todo");
    setTodos(data ? JSON.parse(data) : []);
  }, []);

  const AddTodo = () => {
    if (!title) {
      alert("Title cannot be empty");
      return;
    }
    const newTodo = {
      id: Date.now(),
      title,
      description,
      note,
      completed: false,
    };
    const updatedTodos = [newTodo, ...todos];
    setTodos(updatedTodos);
    setTitle("");
    setDescription("");
    setNote("");
    localStorage.setItem("lwp-todo", JSON.stringify(updatedTodos));
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("lwp-todo", JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("lwp-todo", JSON.stringify(updatedTodos));
  };

  return (
    <div class="center">
      <h1>My ToDo App</h1>,
      <div>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="description">description</label>
          <input
            name="description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="note">note</label>
          <input
            name="note"
            value={note}
            onChange={(event) => {
              setNote(event.target.value);
            }}
          />
        </div>

        <div>
          <button onClick={AddTodo}>Add</button>
        </div>
      </div>
      <h2>Todos:</h2>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
        >
          <p>Id: {todo.id}</p>
          <p>Title: {todo.title}</p>
          <p>Description: {todo.Description}</p>
          <p>Note: {todo.note}</p>

          {!todo.completed && (
            <button
              onClick={() => {
                completeTodo(todo.id);
              }}
            >
              Complete
            </button>
          )}

          <button
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
