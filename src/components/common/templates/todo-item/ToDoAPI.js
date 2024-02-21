function getAllTodos() {
  fetch("http://localhost:5050/v1/todos/all")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export default getAllTodos;
