import React from 'react';
import LoadingDiv from "../../components/common/templates/loading-div";
import StandardBtn from "../../components/common/buttons/standard-btn";
import "./infopage.css"

function InfoPage() {
  return (
    <div>
      <div className="textPos">
        <LoadingDiv />
      </div>
        <div className="btnPos">
          <StandardBtn onClick={() => alert("Hallo von der Info Seite")}>
            Klick mich
          </StandardBtn>
        </div>
    </div>

  );
}

export default InfoPage;
