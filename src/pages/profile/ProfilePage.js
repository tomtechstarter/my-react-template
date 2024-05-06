import { useContext } from "react";
import UserContext from "../../contexts/user-context/userContext";
import StandardBtn from "../../components/common/buttons/standard-btn";
import styles from "./ProfilePage.module.css";
import ProfileAvatar from "../../components/common/images/profile-avatar";

function ProfilePage() {
  const { user, logoutUser } = useContext(UserContext);

  if (!user) return null;
  return (
    <div className={styles.mainContainer}>
      <ProfileAvatar imageUrl={user.profileImgUrl} size={90} />
      <h2>{user.name}</h2>
      <h3>{user.email}</h3>

      <div>{`Mitglied seit: ${new Date(user.createdAt).toUTCString()}`}</div>
      <StandardBtn
        style={{ backgroundColor: "red", marginTop: 32 }}
        text={"Logout"}
        onClick={logoutUser}
      ></StandardBtn>
    </div>
  );
}

export default ProfilePage;
