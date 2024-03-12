import { TodosMutations, TodosQueries } from "../../../api/v1/todos";
import Checkbox from "../../../components/common/buttons/checkbox";
import StandardBtn from "../../../components/common/buttons/standard-btn/StandardBtn";
import { useState, useEffect } from "react";

function AddTodo({ setTodos }) {
  //Da wir die Werte erst aus der API mit einem HTTP GET holen müssen,
  //nutzen wir die States von React aus, die bei Veränderung ein
  //neurendern der Komponente triggern
  //Antwort ist da? => lad die Komponente einmal mit Daten gefüllt neu

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

  //wenn wir die Daten in todos drin haben (durch den fetch)
  //können wir auch todos, sowie dessen Inhalte in Probs weitergeben
  //hier: "todo={todos[1]}" gibt das 2. todo weiter.
  return (
    <div>
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
      <StandardBtn id={"add_todo_btn"} text={"ADD"} cla onClick={onClickAdd} />
    </div>
  );
}

export default AddTodo;
