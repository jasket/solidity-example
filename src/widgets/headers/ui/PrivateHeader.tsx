import { useAppDispatch } from "entities/store";
import { authSelectors, authActions } from "entities/auth";
import { useSelector } from "react-redux";

const PrivateHeader = () => {
  const dispatch = useAppDispatch();

  const ladingState = useSelector(authSelectors.selectLoadingState);

  const onLogout = () => {
    dispatch(authActions.logoutApp());
  };

  return (
    <div className="p-2 text-right">
      <span className="mr-2 text-gray-400">{ladingState}</span>
      <button className="underline" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default PrivateHeader;
