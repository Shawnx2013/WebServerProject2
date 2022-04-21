import NavTopBar from "../components/NavTopBar";
import RemoveModal from "../components/RemoveModal";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function ItemPage({ stock, description }) {
  const location = useLocation();
  const item = location.state.state;
  const navigate = useNavigate();
  const [isRemove,setRemove] = useState(false);

  function remove() {
    setRemove(true);
  }

  return (
    <div>
      <div>
        <NavTopBar name={item.name} />
      </div>
      <div className="mt-8 ml-[25%]">
        <div>
          <p className="ml-[5rem]">Avaliable</p>
          <p>{item.description}</p>
        </div>

        <button
          className=" bg-orange-500 w-1/4 h-10 rounded-md mt-4 text-white mr-4"
          onClick={() => {
            navigate("/edit", { replace: true, state: item });
          }}
        >
          Edit
        </button>
        <button
          className=" bg-orange-500 w-1/4 h-10 rounded-md mt-4 text-white"
          onClick={() => {
            setRemove(true);
          }}
        >
          Remove
        </button>
      </div>
      {isRemove ?
        <RemoveModal 
          name={item.name} 
          id={item.id} 
        />
      :
        null
      }
    </div>
  );
}

export default ItemPage;
