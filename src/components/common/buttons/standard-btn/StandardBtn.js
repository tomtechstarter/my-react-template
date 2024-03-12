import styles from "./StandardBtn.module.css";

function StandardBtn({ onClick, text, style, myClassName }) {
  return (
    <div
      className={`${styles.myBtn} ${myClassName}`}
      style={style}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export default StandardBtn;
