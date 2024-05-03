import { useContext, useEffect, useState } from "react";
import Checkbox from "../../components/common/buttons/checkbox";
import LoadingDiv from "../../components/common/templates/loading-div";
import styles from "./LoginPage.module.css";
import StandarTextinput from "../../components/common/textinputs/standard-ti";
import StandardBtn from "../../components/common/buttons/standard-btn";
import UserContext from "../../contexts/user-context/userContext";

function LoginPage() {
  const { loginUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function onClickLogin() {
    setIsLoading(true);
    await loginUser(email, password);
    setIsLoading(false);
  }

  return (
    <div className={styles.mainContainer}>
      <h2>Login</h2>
      <StandarTextinput
        type={"email"}
        value={email}
        placeholder="Email"
        setNewValue={setEmail}
      />

      <StandarTextinput
        type={"password"}
        value={password}
        placeholder="Password"
        setNewValue={setPassword}
      />

      <StandardBtn
        isLoading={isLoading}
        text={"Login"}
        onClick={onClickLogin}
      />
    </div>
  );
}

export default LoginPage;
