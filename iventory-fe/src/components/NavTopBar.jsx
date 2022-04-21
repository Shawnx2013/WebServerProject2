import Menu from "@material-ui/icons/Menu";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import ExitToApp from "@material-ui/icons/ExitToApp";
import FilterList from "@material-ui/icons/FilterList";

function NavTopBar({ name }) {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth0();

  return (
    <div>
      <div
        className={`h-[35%] w-1/4 bg-slate-100 absolute ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <button
          className="ml-4"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {"X"}
        </button>
        <Link to="/inventory">
          <p className=" text-xl mb-2  p-4 border-b-[1px] border-slate-900">
            <FilterList />
            Inventory
          </p>
        </Link>

        <Link to="/add">
          <p className="text-xl mb-2 p-4 border-b-[1px] border-slate-900">
            + Add Item{" "}
          </p>
        </Link>
        <p
          onClick={() => logout({ returnTo: window.location.origin })}
          className="text-xl mb-2 p-4"
        >
          <ExitToApp /> logout
        </p>
      </div>
      <div className="w-full h-12 bg-black text-white">
        <div>
          <span
            className="text-white ml-4 "
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <Menu fontSize="large" />
          </span>

          <span className="ml-4">{name}</span>
        </div>
      </div>
    </div>
  );
}

export default NavTopBar;
