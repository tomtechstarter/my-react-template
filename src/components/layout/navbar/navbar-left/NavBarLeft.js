import { useNavigate } from "react-router-dom";
import styles from "./NavBarLeft.module.css";

function NavBarLeft() {
  const navigate = useNavigate();

  function onClickLogo() {
    navigate("/");
  }
  return (
    <div onClick={onClickLogo} className={styles.mainContainer}>
      <div>My Todo App</div>
    </div>
  );
}

export default NavBarLeft;
