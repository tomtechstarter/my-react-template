import { useEffect, useState } from "react";
import Checkbox from "../../components/common/buttons/checkbox";
import LoadingDiv from "../../components/common/templates/loading-div";
import styles from "./SignUpPage.module.css";
import StandarTextinput from "../../components/common/textinputs/standard-ti";
import StandardBtn from "../../components/common/buttons/standard-btn";

function SignUpPage() {
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedpassword, setRepeatedPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onClickStayLoggedIn() {
    setStayLoggedIn(!stayLoggedIn);
  }

  function onClickLogin() {}

  return (
    <div className={styles.mainContainer}>
      <h2>Sign Up</h2>
      <StandarTextinput
        type={"email"}
        value={email}
        placeholder="Email"
        setNewValue={setEmail}
      />

      <StandarTextinput
        type={"text"}
        value={name}
        placeholder="Name"
        setNewValue={setName}
      />

      <StandarTextinput
        type={"password"}
        value={setPassword}
        placeholder="Password"
        setNewValue={setPassword}
      />

      <StandarTextinput
        type={"password"}
        value={repeatedpassword}
        placeholder="Repeat Password"
        setNewValue={setRepeatedPassword}
      />

      <StandardBtn
        isLoading={isLoading}
        text={"Sign Up"}
        onClick={onClickLogin}
      />
    </div>
  );
}

export default SignUpPage;
