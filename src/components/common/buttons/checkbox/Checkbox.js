import styles from "./Checkbox.module.css";

function Checkbox({ onClick, isChecked, label }) {
  return (
    <div>
      {label}
      <div className={styles.mainContainer} onClick={onClick}>
        {isChecked ? <div className={styles.isChecked} /> : null}
      </div>
    </div>
  );
}

export default Checkbox;
