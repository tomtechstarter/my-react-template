import "./InfoPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import LoadingDiv from "../../components/common/templates/loading-div";
import StandardBtn from "../../components/common/buttons/standard-btn/StandardBtn";
import Checkbox1 from "../../components/common/buttons/checkbox/Checkbox1";

function InfoPage() {
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  function onClickStayLoggedIn() {
    setStayLoggedIn(!stayLoggedIn);
  }
  return (
    <div>
      <div className="Navbar">
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
        <div>
          <Link to="/impressum">
            <button>Impressum</button>
          </Link>
        </div>
        <div>
          <Link to="/aboutme">
            <button>About Me</button>
          </Link>
        </div>
        <div>
          <Link to="/infopage">
            <button>Info Page</button>
          </Link>
        </div>
        <div></div>
      </div>
      <div>
        <div className="check">
          <div> This is my Info page</div>
          <LoadingDiv />
          <StandardBtn />
          <Checkbox1 isChecked={stayLoggedIn} onClick={onClickStayLoggedIn} />
        </div>
      </div>
      <div className="p1">
        <p1>
          Hallo zusammen, wie haben heute den Hauptteil der Vorlesung genutzt,
          um gemeinsam ein Base Template in React anzulegen. Dieses sollt ihr
          bitte für die Aufgabe verwenden.
          <br />
          <br />
          Eine Option möchte ich gerne auflisten, wie ihr mit diesem template
          arbeiten könntet für ein neues Projekt:
          <br />
          <br />
          1. Cloned euch mein Repo (Link im Anhang) <br />
          <br />
          2. Erstellt ein neues leeres Repository <br />
          <br />
          3. Kopiert euch aus dem geclonten repository die folgenden
          Dateien/Verzeichniss: public, src, .gitignore, package.json und fügt
          diese in euer leeres repository ein <br />
          <br />
          4. Öffnet euer repository in einem neuen Fenster in VS-Code <br />
          <br />
          5. Öffnet das Terminal und installiert die Pakete, welche in der
          packag.json Datei hinterlegt sind mit npm install <br />
          <br />
          6. Jetzt solltet ihr die Möglichkeit haben das Base-Template zu nutzen
          <br />
          Aufgabe: 0. Macht euch mit der Struktur und dem Aufbau des
          Base-Templates vertraut <br />
          <br />
          1. Eröffnet einen neuen Branch mit dem Namen info-page <br />
          <br />
          2. Erstellt eine neue Komponente unter dem Verzeichnis src/pages mit
          dem namen info-page <br />
          <br />
          3. Bindet eine neue Route ein, welche unter dem Pfad /info erreichbar
          sein sollte <br />
          <br />
          4. Bindet die Komponenten LoadingDiv auf der InfoSeite ein
          <br />
          <br />
          5. Bindet die Komponente StandardBtn ein. Beim Klicken auf den Button
          soll ein alert erscheinen Der Sagt "Hallo von der Info Seite" <br />
          <br />
          <br />
          6. Veröffentlicht den Branch und erstellt eine Pull Request (Auf
          Github im Browser). <br />
          <br />
          Merged diese Pull Request aber noch nicht, sonder lasst diese offen.
          Viel Erfolg und bei Fragen kommt gerne auf uns zu :) <br />
          <br />
          PS: Ich habe das Thema zu Scrum schonmal mit angehangen. Ihr könnt
          euch die Folien gerne schon angucken, müsst ihr aber nicht. <br />
          Wir werden morgen darüber sprechen{" "}
        </p1>
      </div>
    </div>
  );
}

export default InfoPage;
