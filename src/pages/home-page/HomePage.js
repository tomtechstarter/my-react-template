import LoadingDiv from "../../components/common/templates/loading-div";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.mainContainer}>
      <div> This is my homepage</div>
      <LoadingDiv />
    </div>
  );
}

export default HomePage;
