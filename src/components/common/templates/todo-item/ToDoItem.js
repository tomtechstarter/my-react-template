import { useState } from "react";
import Checkbox from "../../buttons/checkbox";
import styles from "./ToDoItem.module.css";
import { TodosMutations } from "../../../../api/v1/todos";
import StandardBtn from "../../buttons/standard-btn/StandardBtn";

function ToDoItem({ todo }) {
  const [isDone, setIsDone] = useState(todo.isDone);
  const [task, setTask] = useState(todo.task);
  const [dueDate, setDueDate] = useState(todo.dueDate);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  async function onClickDone() {
    const currentIsDone = isDone;
    try {
      setIsDone(!currentIsDone);
      await TodosMutations.markTodo(todo.id, !isDone);
    } catch (e) {
      setIsDone(currentIsDone);
    }
  }

  async function onClickDelete() {
    try {
      setIsDeleted(true);
      await TodosMutations.deleteTodo(todo.id);
    } catch (e) {
      setIsDeleted(false);
    }
  }

  async function onClickSendUpdate() {
    await TodosMutations.updateTodo(todo.id, task, isDone, dueDate);
    setIsEditMode(false);
  }

  async function onClickEdit() {
    setIsEditMode(true);
  }

  if (isDeleted) return null;

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
