import { TodosMutations } from "../../../api/v1/todos";
import Checkbox from "../../../components/common/buttons/checkbox";
import StandardBtn from "../../../components/common/buttons/standard-btn/StandardBtn";
import { useState } from "react";
import styles from "./AddTodo.module.css";
import StandarTextinput from "../../../components/common/textinputs/standard-ti";

function AddTodo({ setTodos, onClickClose }) {
  const [newUserId, setNewUserId] = useState("");
  const [newTask, setNewTask] = useState("");
  const [newDueDate, setNewDueDate] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  async function onClickAdd() {
    console.log("Ich poste jetzt!", newUserId, newTask, newDueDate);

    // Wenn kein datum dann brich die Funktion ab
    if (newUserId.length < 1 || newTask.length < 1 || newDueDate.length < 1) {
      alert("Bitte fülle alle Textfelder aus");
      return;
    }

    setIsLoading(true);
    setTimeout(async () => {
      const newTodo = await TodosMutations.createTodo(
        newUserId,
        newTask,
        false,
        newDueDate
      );
      setIsLoading(false);
      setTodos((todos) => [...todos, newTodo]);
      onClickClose();
    }, 2000);
  }
  function onClickChild(event) {
    event.stopPropagation();
  }

  return (
    <div onClick={onClickClose} className={styles.container}>
      <div onClick={onClickChild} className={styles.mainContainer}>
        <h2>Neues Todo hinzufügen</h2>
        <StandarTextinput
          type={"text"}
          id={"add_todo_ti_userid"}
          value={newUserId}
          placeholder="New User ID..."
          setNewValue={setNewUserId}
        />

        <StandarTextinput
          type={"text"}
          id={"add_todo_ti_task"}
          value={newTask}
          placeholder="aufgabe..."
          setNewValue={setNewTask}
        />

        <StandarTextinput
          type={"date"}
          id={"add_todo_ti_date"}
          value={newDueDate}
          placeholder="datum..."
          setNewValue={setNewDueDate}
        />

        <StandardBtn
          isLoading={isLoading}
          id={"add_todo_btn"}
          text={"ADD"}
          onClick={onClickAdd}
        />
      </div>
    </div>
  );
}

export default AddTodo;
