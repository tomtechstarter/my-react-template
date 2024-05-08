import { useContext, useState } from "react";
import styles from "./SignUpPage.module.css";
import StandarTextinput from "../../components/common/textinputs/standard-ti";
import StandardBtn from "../../components/common/buttons/standard-btn";
import UserContext from "../../contexts/user-context/userContext";

function SignUpPage() {
  const { registerUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedpassword, setRepeatedPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function onClickSignup() {
    setError(null);
    try {
      setIsLoading(true);
      registerUser(email, password, name, imageUrl);
    } catch (e) {
      setError("Etwas ist bei der Registrierung schief gelaufen");
    } finally {
      setIsLoading(false);
    }
  }

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
        type={"text"}
        value={imageUrl}
        placeholder="Profibild URL"
        setNewValue={setImageUrl}
      />

      <StandarTextinput
        type={"password"}
        value={password}
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
        onClick={onClickSignup}
      />

      {error && <div>{error}</div>}
    </div>
  );
}

export default SignUpPage;
