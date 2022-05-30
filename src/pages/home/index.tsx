import { Link } from "react-router-dom";
import { ROUTES } from "shared/config";

const Home = () => {
  return (
    <div className="p-2">
      <div className="underline">
        <Link to={ROUTES.login}>Login</Link>
      </div>
      <div className="underline">
        <Link to={ROUTES.protected}>Protected</Link>
      </div>
    </div>
  );
};

export default Home;
