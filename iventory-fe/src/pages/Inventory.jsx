import ItemCard from "../components/ItemCard";
import NavTopBar from "../components/NavTopBar";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Search from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { ItemContext } from "../ItemContext";

function Inventory() {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();
  const { token, setToken } = useContext(ItemContext);
  const [allItems, setAllItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [search, setSearch] = useState(false);

  const [userMetadata, setUserMetadata] = useState(null);
  
  useEffect(() => {
    async function getToken() {
      try {
        const accessToken = await getAccessTokenSilently();
        return accessToken
      } catch (e) {
        console.log(e.message);
      }
    }
    getToken().then(function(accessToken) {
      setToken(accessToken);
      axios({
        method: "get",
        url: "http://localhost:8080/api/item",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      }).then((result) => {
        //console.log(result);
        setAllItems(result.data);
      });
    });
  }, [setToken, getAccessTokenSilently]);

  function filter(name) {
    setSearch(true);
    setFilterItems(allItems.filter((elm) => elm.name === name));
  }
  return (
    <div>
      <div>
        {" "}
        <NavTopBar name={"Inventory"} />
      </div>
      {isAuthenticated && (
        <div>
          <p className="ml-[20%] mt-8 text-2xl font-bold">
            Welcome, {user.nickname} !
          </p>
          <div>
            <input
              placeholder="Search"
              className="w-2/4 bg-slate-100 rounded-md mt-20 h-12 ml-[25%] shadow-lg"
              onChange={(e) => {
                setSearchName(e.target.value);
              }}
            />
            <span
              onClick={() => {
                filter(searchName);
              }}
            >
              <Search />
            </span>
            <button
              onClick={() => {
                setSearch(false);
              }}
              className="ml-8"
            >
              Reset
            </button>
          </div>
          <div className="flex mt-24 justify-evenly flex-wrap">
            {search
              ? filterItems.map(function (item) {
                  return (
                    <Link to={"/item"} state={{ state: item }}>
                      <ItemCard
                        productName={item.name}
                        description={item.description}
                      />
                    </Link>
                  );
                })
              : allItems.map(function (item) {
                  return (
                    <Link to={"/item"} state={{ state: item }}>
                      <ItemCard
                        productName={item.name}
                        description={item.description}
                      />
                    </Link>
                  );
                })}
            {}
          </div>
        </div>
      )}
    </div>
  );
}

export default Inventory;
