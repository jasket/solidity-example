import { useAppDispatch } from "entities/store";
import { authSelectors, fetchAppInitialize } from "entities/auth";
import { useSelector } from "react-redux";

const PublicHeader = () => {
  const dispatch = useAppDispatch();

  const ladingState = useSelector(authSelectors.selectLoadingState);

  const onAuth = () => {
    dispatch(fetchAppInitialize());
  };

  return (
    <div className="p-2 text-right">
      <span className="mr-2 text-gray-400">{ladingState}</span>
      <button className="underline" onClick={onAuth}>
        Login
      </button>
    </div>
  );
};

export default PublicHeader;
