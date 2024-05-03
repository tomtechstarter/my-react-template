import { useContext, useState } from "react";
import StandardBtn from "../../../common/buttons/standard-btn";
import styles from "./NavBarRight.module.css";
import UserContext from "../../../../contexts/user-context/userContext/UserContext";
import { useNavigate } from "react-router-dom";

function NavBarRight() {
  const { user, logoutUser } = useContext(UserContext);

  const navigate = useNavigate();
  function loginMyUser() {
    navigate("/login");
  }

  function signUpUser() {
    navigate("/signup");
  }

  return (
    <div className={styles.mainContainer}>
      {user ? (
        <StandardBtn onClick={logoutUser} text={"Logout"} />
      ) : (
        <>
          <StandardBtn onClick={loginMyUser} text={"Login"} />

          <div className={styles.spacer} />
          <StandardBtn onClick={signUpUser} text={"Sign Up"} />
        </>
      )}
    </div>
  );
}

export default NavBarRight;
