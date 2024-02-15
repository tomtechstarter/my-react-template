import ToDoItem from "../../components/common/templates/todo-item";
import styles from "./ToDoPage.module.css";

function ToDoPage() {
  return (
    <div className={styles.mainContainer}>
      <ToDoItem></ToDoItem>
      <ToDoItem></ToDoItem>
    </div>
  );
}

export default ToDoPage;
