import React from 'react';
import LoadingDiv from "../../components/common/templates/loading-div";
import StandardBtn from "../../components/common/buttons/standard-btn";

function InfoPage() {
  return (
    <div>
      <LoadingDiv />
      <StandardBtn onClick={() => alert('Hallo von der Info Seite')}>
        Klick mich
      </StandardBtn>
    </div>
  );
}

export default InfoPage;
