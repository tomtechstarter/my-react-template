import api from "../../config/api";

async function createTodo(newTodo) {
  const result = api.post("/todos/create", {
    newTodo: newTodo,
  });

  const todos = result.data;

  return todos;
}

async function markTodo(todoId, isDone) {
  const result = await api.put("/todos/mark", {
    id: todoId,
    newIsDone: isDone,
  });

  const todo = result.data.updatedTodo;

  return todo;
}

async function deleteTodo(todoId) {
  const result = await api.delete("/todos/delete", {
    data: { todoId },
  });

  const deletedTodoId = result.data.deletedTodoId;

  return deletedTodoId;
}

export default { createTodo, markTodo, deleteTodo };
