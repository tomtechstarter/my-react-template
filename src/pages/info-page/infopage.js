import { useState } from "react";
import Checkbox from "../../components/common/buttons/checkbox";
import LoadingDiv from "../../components/common/templates/loading-div";
import styles from "./infopage.module.css.module.css";

function infopage() {
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  function onClickStayLoggedIn() {
    setStayLoggedIn(!stayLoggedIn);
  }
  return (
    <div className={styles.mainContainer}>
      <div> Hallo von der Info Seite 09.01.2024-2</div>
      <LoadingDiv />
      <Checkbox isChecked={stayLoggedIn} onClick={onClickStayLoggedIn} />
    </div>
  );
}

export default infopage;
