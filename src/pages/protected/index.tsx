import { Link } from "react-router-dom";
import { ROUTES } from "shared/config";

const Protected = () => {
  return (
    <div className="p-2">
      <div className="text-gray-400 text-center">Protected</div>
      <div className="underline">
        <Link to={ROUTES.home}>Home</Link>
      </div>
    </div>
  );
};

export default Protected;
