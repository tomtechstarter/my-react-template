import { useState } from "react";
import Checkbox from "../../buttons/checkbox";
import styles from "./ToDoItem.module.css";
import { TodosMutations } from "../../../../api/v1/todos";
import StandardBtn from "../../buttons/standard-btn/StandardBtn";

function ToDoItem({ todo }) {
  console.log("TODO", todo);
  const [isDone, setIsDone] = useState(todo.isDone);
  const [isDeleted, setIsDeleted] = useState(false);

  async function onClickDone() {
    const newTodo = await TodosMutations.markTodo(todo.id, !isDone);
    setIsDone(!isDone);
    console.log("NEW TODO", newTodo);
  }

  async function onClickDelete() {
    setIsDeleted(true);
    console.log("MY TDO", todo);
    await TodosMutations.deleteTodo(todo.id);
  }
  if (isDeleted) return null;
  return (
    <div className={styles.mainContainer}>
      <h1>ToDo-Item</h1>
      <div className={styles.horizontalLine}></div>
      <p>Aufgabe: {todo.task}</p>
      <p>DueDate: {new Date(todo.dueDate).toDateString()}</p>
      <label>
        Geschafft: <Checkbox isChecked={isDone} onClick={onClickDone} />
      </label>

      <StandardBtn text={"DELETE"} onClick={onClickDelete} />
    </div>
  );
}

export default ToDoItem;
