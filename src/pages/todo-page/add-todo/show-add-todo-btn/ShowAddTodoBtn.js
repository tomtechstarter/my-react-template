import { FaPlus } from "react-icons/fa";
import styles from "./ShowAddTodoBtn.module.css";

function ShowAddTodoBtn({ setShowTodo }) {
  return (
    <div className={styles.container} onClick={setShowTodo}>
      <FaPlus color="white" />
    </div>
  );
}

export default ShowAddTodoBtn;
