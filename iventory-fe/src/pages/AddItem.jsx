import NavTopBar from "../components/NavTopBar";
import { ItemContext } from "../ItemContext";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
function AddItem() {
  const { token } = useContext(ItemContext);
  const [name, setName] = useState("");
  const [location, setLocale] = useState("");
  const [desc, setDesc] = useState("");

  function addItem() {
    const payload = {
      name: name,
      description: desc,
      location: location,
    };
    axios({
      method: "post",
      url: "http://localhost:8080/api/item/",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: JSON.stringify(payload),
    }).then(function (res) {
      console.log("this is the res", res);
    });
  }
  return (
    <div>
      <div>
        {console.log(token)} <NavTopBar name={"AddItem"} />
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
          value={location}
          onChange={(e) => {
            setLocale(e.target.value);
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
          onClick={addItem}
          className=" bg-orange-500 w-1/4 h-10 rounded-md mt-8 ml-[25%] text-white mr-4"
          // onClick={() => loginWithRedirect()}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddItem;
