import ItemCard from "../components/ItemCard";
import NavTopBar from "../components/NavTopBar";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Search from "@material-ui/icons/Search";
import { useNavigate, Link } from "react-router-dom";
import { ItemContext } from "../ItemContext";

function Inventory() {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();
  const { token, setToken } = useContext(ItemContext);
  const [allItems, setAllItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [search, setSearch] = useState(false);

  let navigate = useNavigate();

  const [userMetadata, setUserMetadata] = useState(null);
  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-8bqfizw3.us.auth0.com";

      try {
        const accessToken = await getAccessTokenSilently();

        setToken(accessToken);

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub, setToken]);

  useEffect(() => {
    const items = async () => {
      try {
        const res = await axios({
          method: "get",
          url: "http://localhost:8080/api/item",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setAllItems(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    items();
  }, [allItems, token]);

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
            Welcome, {user.name} !
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
