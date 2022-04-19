import Menu from "@material-ui/icons/Menu";
import LogoutButton from './LogoutButton';
function NavTopBar({ name }) {
  return (
    <div className="w-full h-12 bg-black text-white">
      <div>
        <span className="text-white ml-4 ">
          <Menu fontSize="large" />
        </span>

        <span className="ml-4">{name}</span>
       
      </div>
      <LogoutButton/>
    </div>
  );
}

export default NavTopBar;
