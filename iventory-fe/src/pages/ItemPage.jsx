import NavTopBar from "../components/NavTopBar";
import RemoveModal from "../components/RemoveModal";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function ItemPage({ stock, description }) {
  const location = useLocation();
  const item = location.state.state;
  const navigate = useNavigate();
  const [isRemove, setRemove] = useState(false);

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
          <p className=" text-2xl text-[#54DD00]">
            Avaliable {item.count} remaining{" "}
          </p>
          <textarea
            className="w-3/4 pt-4 bg-slate-100 rounded-md mt-20 h-[10rem]  shadow-lg"
            defaultValue={item.description}
          >
            {/* {JSON.stringify(item.description)} */}
          </textarea>
        </div>
        <p className="mt-4 text-xl">Location: Shelf {item.location}</p>
        <button
          className=" bg-orange-500 w-1/4 h-10 rounded-md mt-8 text-white mr-4"
          onClick={() => {
            navigate("/edit", { replace: true, state: item });
          }}
        >
          Edit
        </button>
        <button
          className=" bg-orange-500 w-1/4 h-10 rounded-md mt-8 text-white"
          onClick={() => {
            setRemove(true);
          }}
        >
          Remove
        </button>
      </div>
      {isRemove ? <RemoveModal name={item.name} id={item.id} /> : null}
    </div>
  );
}

export default ItemPage;
