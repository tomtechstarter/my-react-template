import "./checkbox1.css";

function Checkbox1({ onClick, isChecked }) {
  return (
    <div className="boton">
      <button onClick={() => alert("¡Hallo von der Info Seite!")}>
        Aufgabe 5
      </button>
    </div>
  );
}

export default Checkbox1;
