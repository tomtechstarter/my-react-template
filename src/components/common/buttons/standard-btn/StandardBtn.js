import styles from "./StandardBtn.module.css";

function StandardBtn({ onClick, text, style, myClassName, isLoading }) {
  return (
    <div
      className={`${styles.myBtn} ${myClassName}`}
      style={style}
      onClick={!isLoading ? onClick : undefined}
    >
      {isLoading ? "Lädt ..." : text}
    </div>
  );
}

export default StandardBtn;
