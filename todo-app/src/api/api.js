import axios from "axios";

const getAllTodos = () => {
  return axios.get("/todos/");
};
const createTodo = () => {
  return axios.post("/todos", data);
};
const deleteTodo = () => {
  return axios.delete(`/todos/${id}`);
};
const updateTodo = () => {
  return axios.put(`todos/${id}`, data);
};

export { getAllTodos, createTodo, deleteTodo, updateTodo };
