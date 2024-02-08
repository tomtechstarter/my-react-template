// import styles from "./InfoPage.module.css";
import { useState } from "react";
import Checkbox from "../../components/common/buttons/checkbox";
import LoadingDiv from "../../components/common/templates/loading-div";
import StandardBtn from "../../components/common/buttons/standard-btn/StandardBtn";

function InfoPage() {
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  function onClickStayLoggedIn() {
    setStayLoggedIn(!stayLoggedIn);
  }
  return (
    <div>
      This is my InfoPage
      <div>
        <div> This is my Info page</div>
        <LoadingDiv />
        <StandardBtn />
        <Checkbox isChecked={stayLoggedIn} onClick={onClickStayLoggedIn} />
      </div>
    </div>
  );
}

export default InfoPage;
