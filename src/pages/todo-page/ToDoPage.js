import { TodosMutations, TodosQueries } from "../../api/v1/todos";
import Checkbox from "../../components/common/buttons/checkbox";
import StandardBtn from "../../components/common/buttons/standard-btn/StandardBtn";
import ToDoItem from "../../components/common/templates/todo-item";
import styles from "./ToDoPage.module.css";
import { useState, useEffect } from "react";

function ToDoPage() {
  //Da wir die Werte erst aus der API mit einem HTTP GET holen müssen,
  //nutzen wir die States von React aus, die bei Veränderung ein
  //neurendern der Komponente triggern
  //Antwort ist da? => lad die Komponente einmal mit Daten gefüllt neu
  const [todos, setTodos] = useState([]);
  const [newId, setNewId] = useState("");
  const [newTask, setNewTask] = useState("");
  const [newDueDate, setNewDueDate] = useState("");
  const [newIsDone, setNewIsDone] = useState(false);

  async function fetchTodos() {
    try {
      console.log("Hello world 1 von fetchTodos");

      const jsonResponse = await TodosQueries.fetchAllTodos();
      console.log("MY JSON RESPONSE", jsonResponse);

      setTodos(jsonResponse);
    } catch (e) {
      console.log("Hello world", e);
    }
  }

  async function onClickAdd() {
    console.log("Ich poste jetzt!");
    const newTodo = await TodosMutations.createTodo(
      newId,
      newTask,
      newIsDone,
      newDueDate
    );

    setTodos([...todos, newTodo]);
  }

  // Alternative Funktion für den API Aufruf
  // Achtung: Wird nicht verwendet
  function alternativeFetchTodos() {
    fetch("http://localhost:5050/v1/todos/all")
      .then((response) => {
        console.log("Hello world 2 von alternativeFetchTodos");
        console.log("Das ist meine rohe Antwort", response);
        return response.json();
      })
      .then((todosJson) => {
        console.log("Hello world 3 von alternativeFetchTodos");
        // setTodos(todosJson);
      });

    console.log("Hello world 1 von alternativeFetchTodos");
  }

  // useEffect
  useEffect(() => {
    fetchTodos();

    // ausprobieren ob API-Request klappt
    // TodosMutations.updateTodo(4, "lesen", true, "2024-01-01");
  }, []);

  //###Ergänzung zum Code vom Unterricht:###
  //Wenn todos noch leer ist, gib leeren Container aus
  if (todos.length == 0) {
    return <div className={styles.mainContainer}></div>;
  }

  //wenn wir die Daten in todos drin haben (durch den fetch)
  //können wir auch todos, sowie dessen Inhalte in Probs weitergeben
  //hier: "todo={todos[1]}" gibt das 2. todo weiter.
  return (
    <div className={styles.mainContainer}>
      <div>
        <input
          type="text"
          value={newId}
          placeholder="id..."
          onChange={(event) => setNewId(event.target.value)}
        ></input>
        <input
          type="text"
          value={newTask}
          placeholder="aufgabe..."
          onChange={(event) => setNewTask(event.target.value)}
        ></input>
        <input
          type="text"
          value={newDueDate}
          placeholder="datum..."
          onChange={(event) => setNewDueDate(event.target.value)}
        ></input>
        <Checkbox
          isChecked={newIsDone}
          onClick={() => setNewIsDone(!newIsDone)}
        ></Checkbox>
        <StandardBtn text={"ADD"} onClick={onClickAdd} />
      </div>

      <div>
        {todos.map((item) => (
          <ToDoItem key={item.id} todo={item} />
        ))}
      </div>
    </div>
  );
}

export default ToDoPage;

// async function fetchTodos() {
//   try {
//     console.log("Hello world 1 von fetchTodos");
//     const response = await fetch("http://localhost:5050/v1/todos/all");
//     const jsonResponse = await response.json();
//     console.log("MY JSON RESPONSE", jsonResponse);

//     setTodos(jsonResponse);
//   } catch (e) {
//     console.log("Hello world", e);
//   }
// }
