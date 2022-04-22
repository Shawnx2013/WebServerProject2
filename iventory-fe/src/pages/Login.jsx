import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
      <div className="flex flex-col items-center">
        <p className="text-rit-orange font-medium text-5xl mt-8">
          Inventory System
        </p>
        <p className="text-orange-500 mt-10 text-xl">Manage Your Inventory Items</p>
        <div className="mt-24 flex flex-col items-center">
          <p className="text-orange-500">
            Log into to view inventory of all avaliable computing devices and
            accessiories
          </p>
          <button
            className="mt-28 bg-orange-500 w-1/4 h-10 rounded text-white hover:bg-orange-500/75"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        </div>
      </div>
  );
}

export default Login;
