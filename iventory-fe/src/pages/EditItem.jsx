import { ItemContext } from "../ItemContext";
import { useState, useContext } from "react";
import NavTopBar from "../components/NavTopBar";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function EditItem() {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();
  const { token } = useContext(ItemContext);
  const location = useLocation();
  const item = location.state;
  const navigate = useNavigate();
  const [name, setName] = useState(item.name);
  const [locate, setLocale] = useState(item.location);
  const [count, setCount] = useState(item.count);
  const [desc, setDesc] = useState(item.description);
  const [id] = useState(item.id);

  function editItem() {
    const payload = {
      user: user.nickname,
      name: name,
      description: desc,
      count: parseInt(count),
      location: parseInt(locate),
      id: id,
    };
    axios({
      method: "put",
      url: "http://localhost:8080/api/item/",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: JSON.stringify(payload),
    }).then(function (res) {
      console.log("this is the res", res);
    });

    navigate("/inventory", { replace: true });
  }

  return (
    <div>
      <div>
        <NavTopBar name={"Edit " + item.name} />
      </div>
      <div>
        <input
          placeholder="Name"
          className="w-2/4 bg-slate-100 rounded-md mt-20 h-12 ml-[25%] shadow-lg"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          className=" w-2/4 bg-slate-100 rounded-md mt-20 h-12 ml-[25%] shadow-lg"
          placeholder="Location"
          value={locate}
          onChange={(e) => {
            setLocale(e.target.value);
          }}
        />
        <input
          className=" w-2/4 bg-slate-100 rounded-md mt-20 h-12 ml-[25%] shadow-lg"
          placeholder="Count"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <textarea
          placeholder="Description"
          className="w-2/4 bg-slate-100 rounded-md mt-20 h-[10rem] ml-[25%] shadow-lg"
          type={"textbox"}
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button
          onClick={editItem}
          className=" bg-orange-500 w-1/4 h-10 rounded-md mt-8 ml-[25%] text-white mr-4"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default EditItem;
