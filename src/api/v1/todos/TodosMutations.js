import api from "../../config/api";

async function createTodo(newTodo) {
  const result = api.post("/todos/create", {
    newTodo: newTodo,
  });

  const todos = result.data;

  return todos;
}

async function markTodo(newmark) {
  const result = api.put("/todos/mark", {
    newTodo: newmark,
  });

  const mark = result.data;

  return markTodo;
}

async function updateTodo(newTodo) {
  const result = api.put("/todos/update", {
    newTodo: newTodo,
  });

  const todos = result.data;

  return updateTodo;
}

  async function deleteTodo(newTodo) {
    const result = api.put("/todos/delete", {
      newTodo: newTodo,
    });
  
    const delte = result.data;
  
    return deleteTodo;
  }
export default { createTodo };
