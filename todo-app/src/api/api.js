import axios from "../config/axiosConfig";

const getAllTodos = () => {
  return axios.get("/todos/");
};
const createTodo = (data) => {
  return axios.post("/todos/",data);
};
const deleteTodo = () => {
  return axios.delete(`/todos/${id}`);
};
const updateTodo = (id, data) => {
  return axios.put(`todos/${id}`, data);
};

export { getAllTodos, createTodo, deleteTodo, updateTodo };
