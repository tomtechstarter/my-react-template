import { useNavigate } from "react-router-dom";
import AppData from "../../../../utils/AppData";
import StandardBtn from "../../../common/buttons/standard-btn";
import styles from "./NavBarLeft.module.css";

function NavBarLeft() {
  const navigate = useNavigate();
  function onClickTodo() {
    navigate("/todo");
  }

  function onClickLogo() {
    navigate("/");
  }
  return (
    <div className={styles.mainContainer}>
      <img
        onClick={onClickLogo}
        className={styles.logImg}
        src={AppData.logo}
        alt="logo"
      />
      <StandardBtn text={"Todos"} onClick={onClickTodo} />
    </div>
  );
}

export default NavBarLeft;
