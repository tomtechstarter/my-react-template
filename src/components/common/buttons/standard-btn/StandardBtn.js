import styles from "./StandardBtn.module.css";

function StandardBtn({ onClick, text, style, className, id }) {
  return (
    <div
      id={id}
      className={`${styles.myBtn} ${className}`}
      style={style}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export default StandardBtn;
