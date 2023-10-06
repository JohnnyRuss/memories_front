import { useSelector } from "react-redux";

import {
  selectProfileInfo,
  selectUserStatus,
} from "store/selectors/authSelectors";

import { Avatar } from "components/layouts";
import UserAvatarSkeleton from "./UserAvatarSkeleton";
import styles from "./profile.module.css";

export default function UserAvatar() {
  const user = useSelector(selectProfileInfo);
  const status = useSelector(selectUserStatus);

  return status.loading ? (
    <UserAvatarSkeleton />
  ) : (
    <figure className={styles.profileHeaderFig}>
      <Avatar username={user.name} />

      <figcaption className={styles.profileHeaderFigCaption}>
        <strong className={styles.profileHeaderFigName}>
          <span>{user.name}</span>
        </strong>
        <span className={styles.profileHeaderFigEmail}>{user.email}</span>
      </figcaption>
    </figure>
  );
}
