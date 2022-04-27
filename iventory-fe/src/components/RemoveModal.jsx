import { ItemContext } from "../ItemContext";
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function RemoveModal({ name, id }) {
  const { user } =
    useAuth0();
  const { token } = useContext(ItemContext);
  const navigate = useNavigate();

  function deleteItem() {
    axios({
      method: "delete",
      url: "http://localhost:8080/api/item/" + id,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        username: user.nickname
      },
    }).then(function (res) {
      console.log(res);
    });

    navigate("/inventory", { replace: true });
  }

  return (
    <div className="absolute m-auto left-0 right-0 bg-slate-100 text-black w-[30rem] h-[12.25rem] p-4 rounded-md shadow-lg mt-4 mb-4 top-1/4 ">
      <div className="text-bold text-orange-500  text-2xl">
        {"Remove " + name + " from current inventory?"}
      </div>
      <button
        className=" bg-orange-500 w-[40%] h-10 rounded-md mt-4 text-white mr-4 "
        onClick={deleteItem}
      >
        Yes
      </button>
      <button
        className=" bg-orange-500 w-[40%] h-10 rounded-md mt-4 text-white"
        onClick={() => navigate("/inventory", { replace: true })}
      >
        No
      </button>
    </div>
  );
}

export default RemoveModal;
