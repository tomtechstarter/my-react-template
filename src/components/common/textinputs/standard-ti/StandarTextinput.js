import styles from "./StandarTextinput.module.css";

function StandarTextinput({ type, id, value, placeholder, setNewValue }) {
  function onChangeTI(event) {
    setNewValue(event.target.value);
  }
  return (
    <input
      className={styles.ticontainer}
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChangeTI}
    ></input>
  );
}

export default StandarTextinput;
