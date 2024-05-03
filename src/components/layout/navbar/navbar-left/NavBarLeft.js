import { useNavigate } from "react-router-dom";
import AppData from "../../../../utils/AppData";
import StandardBtn from "../../../common/buttons/standard-btn";
import styles from "./NavBarLeft.module.css";
import { useContext } from "react";
import UserContext from "../../../../contexts/user-context/userContext";

function NavBarLeft() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  function onClickTodo() {
    navigate("/todo");
  }

  function onClickLogo() {
    navigate("/");
  }
  return (
    <div className={styles.mainContainer}>
      {user ? (
        <img
          onClick={onClickLogo}
          className={styles.logImg}
          src={user.profileImgUrl}
          alt="logo"
        />
      ) : (
        <div>My Todo App</div>
      )}
      <StandardBtn text={"Todos"} onClick={onClickTodo} />
    </div>
  );
}

export default NavBarLeft;
