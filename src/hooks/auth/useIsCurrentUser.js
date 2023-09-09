import { useSelector } from "react-redux";
import { selectCurrentUserId } from "store/selectors/authSelectors";

export default function useIsCurrentUser(userId) {
  const currentUserId = useSelector(selectCurrentUserId);

  const isCurrentUser = userId === currentUserId;

  return { isCurrentUser, currentUserId };
}
