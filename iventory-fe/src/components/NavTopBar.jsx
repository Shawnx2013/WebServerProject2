import Menu from "@material-ui/icons/Menu";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import ExitToApp from "@material-ui/icons/ExitToApp";
import FilterList from "@material-ui/icons/FilterList";
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

function NavTopBar({ name }) {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth0();

  return (
    <div>
      <div
        className={`min-h-fit w-1/4 bg-slate-100 absolute drop-shadow-md hover:drop-shadow-xl ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="p4">
          <button
            className="ml-4 mt-4"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <CloseIcon />
          </button>
        </div>
        <Link to="/inventory">
          <p className="text-xl p-4 border-b-[1px] border-slate-400">
            <FilterList />
            <span className="pl-2">Inventory</span>
          </p>
        </Link>

        <Link to="/add">
          <p className="text-xl p-4 border-b-[1px] border-slate-400">
            <AddIcon /> 
            <span className="pl-2">Item</span>
          </p>
        </Link>
        <p
          onClick={() => logout({ returnTo: window.location.origin })}
          className="text-xl p-4 hover: cursor-pointer"
        >
          <ExitToApp /> 
          <span className="pl-2">Log out</span>
        </p>
      </div>
      <div className="p-2 flex flex-row bg-black text-white">
        <div>
          <span
            className="text-white ml-2 hover: cursor-pointer"
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
