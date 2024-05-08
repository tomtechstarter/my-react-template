import styles from "./ProfileAvatar.module.css";
import { FaRegUser } from "react-icons/fa";

function ProfileAvatar({ imageUrl, size }) {
  return (
    <div
      className={styles.mainContainer}
      style={{ width: size, height: size, borderRadius: size / 2 }}
    >
      <FaRegUser size={size / 1.5} />
      {imageUrl && (
        <img
          className={styles.userImg}
          alt="profile-avatar"
          src={imageUrl}
          style={{ width: size, height: size, borderRadius: size / 2 }}
        />
      )}
    </div>
  );
}

export default ProfileAvatar;
