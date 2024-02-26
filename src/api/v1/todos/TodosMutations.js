import api from "../../config/api";

async function createTodo(id, task, isDone, dueDate) {
  const result = await api.post("/todos/create", {
    newId: id,
    newTask: task,
    newIsDone: isDone,
    newDueDate: dueDate,
  });

  const newTodo = result.data.todo;

  return newTodo;
}

async function markTodo(todoId, isDone) {
  const result = await api.put("/todos/mark", {
    id: todoId,
    newIsDone: isDone,
  });

  const todo = result.data.updatedTodo;

  return todo;
}

async function updateTodo(updateId, updateTask, updateIsDone, updateDueDate) {
  const result = await api.put("/todos/update", {
    todoId: updateId,
    newTask: updateTask,
    newIsDone: updateIsDone,
    newDueDate: updateDueDate,
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

export default { createTodo, markTodo, updateTodo, deleteTodo };
