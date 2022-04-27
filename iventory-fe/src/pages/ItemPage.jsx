import NavTopBar from "../components/NavTopBar";
import RemoveModal from "../components/RemoveModal";
import { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { ItemContext } from "../ItemContext";

function ItemPage() {
  const location = useLocation();
  const item = location.state.state;
  const navigate = useNavigate();
  const [isRemove, setRemove] = useState(false);
  const { token } = useContext(ItemContext);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const [itemlocation, updateitemloation] = useState("");
  async function getLocation() {
    const accessToken = await getAccessTokenSilently();
    if (isAuthenticated) {
      axios({
        method: "get",
        url: "http://localhost:8080/api/location/" + item.location,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
          username: user.nickname,
        },
      }).then((res) => {
        console.log(res);
        updateitemloation(res.data.name);
      });
    }

    console.log(token);
  }

  useEffect(() => {
    getLocation();
  });

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
          ></textarea>
        </div>
        <p className="mt-4 text-xl">Location: {itemlocation}</p>
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
