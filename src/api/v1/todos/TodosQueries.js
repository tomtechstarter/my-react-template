import api from "../../config/api";

async function fetchAllTodos() {
  const result = await api.get("/todos/all");

  const todos = result.data;

  return todos;
}

async function fetchTodoById(todoId) {
  const result = await api.get("/todos/byid", { params: { todoId } });

  const todo = result.data.todo;

  return todo;
}

async function fetchTodoByUserId(userId) {
  const result = await api.get("/todos/byuserid", { params: { userId } });

  const UserId = result.data.UserId;

  return UserId;
}
export default { fetchAllTodos, fetchTodoById, fetchTodoByUserId};
