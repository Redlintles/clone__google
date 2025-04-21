import styles from "./Profile.module.css";
function Profile({
  name,
  backgroundColor,
}: {
  name: string;
  backgroundColor?: string;
}) {
  return (
    <div
      className={styles["profile"]}
      style={{
        backgroundColor: backgroundColor || "#aaffaa",
      }}
    >
      <p className={styles["profile__name"]}>{name.trim().toUpperCase()[0]}</p>
    </div>
  );
}

export default Profile;
