import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="text-center">
      <p className="text-rit-orange font-bold text-5xl mt-8">
        Inventory System
      </p>
      <p className="text-orange-400">Manage Your Inventory Items</p>
      <div className="mt-24 flex flex-col justify-center">
        <p>
          Log into to view inventory of all avaliable computing devices and
          accessiories
        </p>
        {/* <p className="text-amber-800 ">Account Information</p>
        <input
          placeholder="Username"
          className="bg-slate-300 text-black w-1/4 ml-[38%] h-10"
        ></input>
        <input
          placeholder="Password"
          className="bg-slate-300 text-black  w-1/4 mt-4 ml-[38%] h-10"
        ></input> */}
        {/* <Link to={"inventory"}> */}
        <button
          className="mt-28 bg-orange-500 w-1/4 ml-[38%] h-10"
          onClick={() => loginWithRedirect()}
        >
          Login
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Login;
