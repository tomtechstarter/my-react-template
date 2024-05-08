import AddTodo from "./add-todo";
import { TodosQueries } from "../../api/v1/todos";
import ToDoItem from "../../components/common/templates/todo-item";
import styles from "./ToDoPage.module.css";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import ShowAddTodoBtn from "./add-todo/show-add-todo-btn";

function ToDoPage() {
  const [todos, setTodos] = useState([]);
  const [showAddTodo, setShowAddTodo] = useState(false);

  async function fetchTodos() {
    const jsonResponse = await TodosQueries.fetchAllTodos();
    setTodos(jsonResponse);
  }

  function onClickShowAddTodo() {
    console.log("Hello world", showAddTodo);
    setShowAddTodo(!showAddTodo);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  if (todos.length === 0) return null;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.todoscontainer}>
        {todos.map((item) => (
          <ToDoItem key={item.id} todo={item} />
        ))}
      </div>

      {showAddTodo && (
        <AddTodo onClickClose={onClickShowAddTodo} setTodos={setTodos} />
      )}
      {!showAddTodo && <ShowAddTodoBtn setShowTodo={onClickShowAddTodo} />}
    </div>
  );
}

export default ToDoPage;
