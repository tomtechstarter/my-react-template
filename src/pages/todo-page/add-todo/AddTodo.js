import { TodosMutations } from "../../../api/v1/todos";
import Checkbox from "../../../components/common/buttons/checkbox";
import StandardBtn from "../../../components/common/buttons/standard-btn/StandardBtn";
import { useState } from "react";
import styles from "./AddTodo.module.css";

function AddTodo({ setTodos, onClickClose }) {
  const [newUserId, setNewUserId] = useState("");
  const [newTask, setNewTask] = useState("");
  const [newDueDate, setNewDueDate] = useState("");
  const [newIsDone, setNewIsDone] = useState(false);

  async function onClickAdd() {
    console.log("Ich poste jetzt!");
    const newTodo = await TodosMutations.createTodo(
      newUserId,
      newTask,
      newIsDone,
      newDueDate
    );

    setTodos((todos) => [...todos, newTodo]);
  }

  return (
    <div onClick={onClickClose} className={styles.container}>
      <div className={styles.mainContainer}>
        <input
          type="text"
          id={"add_todo_ti_userid"}
          value={newUserId}
          placeholder="New User ID..."
          onChange={(event) => setNewUserId(event.target.value)}
        ></input>
        <input
          id={"add_todo_ti_task"}
          type="text"
          value={newTask}
          placeholder="aufgabe..."
          onChange={(event) => setNewTask(event.target.value)}
        ></input>
        <input
          id={"add_todo_ti_date"}
          type="text"
          value={newDueDate}
          placeholder="datum..."
          onChange={(event) => setNewDueDate(event.target.value)}
        ></input>
        <Checkbox
          isChecked={newIsDone}
          onClick={() => setNewIsDone(!newIsDone)}
        ></Checkbox>
        <StandardBtn
          id={"add_todo_btn"}
          text={"ADD"}
          cla
          onClick={onClickAdd}
        />
      </div>
    </div>
  );
}

export default AddTodo;
