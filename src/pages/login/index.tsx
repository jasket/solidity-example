import { Link } from "react-router-dom";
import { ROUTES } from "shared/config";

const Login = () => {
  return (
    <div className="p-2">
      <div className="text-gray-400 text-center">Login</div>
      <div className="underline">
        <Link to={ROUTES.home}>Home</Link>
      </div>
    </div>
  );
};

export default Login;
