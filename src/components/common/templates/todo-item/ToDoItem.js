import { useState } from "react";
import Checkbox from "../../buttons/checkbox";
import styles from "./ToDoItem.module.css";
import { TodosMutations } from "../../../../api/v1/todos";
import StandardBtn from "../../buttons/standard-btn/StandardBtn";

function ToDoItem({ todo }) {
  console.log("TODO", todo);
  const [isDone, setIsDone] = useState(todo.isDone);
  const [task, setTask] = useState(todo.task);
  const [dueDate, setDueDate] = useState(todo.dueDate);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

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

  async function onClickSendUpdate() {
    const response = await TodosMutations.updateTodo(
      todo.id,
      task,
      isDone,
      dueDate
    );
    setIsEditMode(false);
    console.log(response);
  }

  async function onClickEdit() {
    setIsEditMode(true);
  }

  if (isDeleted) return null;

  // Aktuell überschreiben wir unsere ToDo-Karte.
  // Wenn du heute die andere Ansicht haben willst, musst du
  // den folgenden Block auskommentieren.
  if (isEditMode) {
    return (
      <div className={styles.mainContainer}>
        <h1> EDIT </h1>
        <div className={styles.horizontalLine}></div>
        <input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        ></input>
        <input
          type="text"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        ></input>
        <Checkbox
          isChecked={isDone}
          onClick={() => setIsDone(!isDone)}
        ></Checkbox>

        <StandardBtn text={"SEND"} onClick={onClickSendUpdate} />
      </div>
    );
  } else {
    return (
      <div className={styles.mainContainer}>
        <h1>ToDo-Item</h1>
        <div className={styles.horizontalLine}></div>
        <p>Aufgabe: {task}</p>
        <p>DueDate: {new Date(dueDate).toDateString()}</p>
        <label>
          Geschafft: <Checkbox isChecked={isDone} onClick={onClickDone} />
        </label>

        <StandardBtn text={"DELETE"} onClick={onClickDelete} />
        <StandardBtn text={"EDIT"} onClick={onClickEdit} />
      </div>
    );
  }
}

export default ToDoItem;
