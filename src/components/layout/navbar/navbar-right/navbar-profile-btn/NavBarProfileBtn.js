import { useContext } from "react";
import styles from "./NavBarProfileBtn.module.css";
import UserContext from "../../../../../contexts/user-context/userContext/UserContext";
import { useNavigate } from "react-router-dom";

function NavBarProfileBtn() {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  function onClickProfile() {
    navigate("/profile");
  }
  return (
    <img
      onClick={onClickProfile}
      className={styles.logImg}
      src={user.profileImgUrl}
      alt="logo"
    />
  );
}

export default NavBarProfileBtn;
