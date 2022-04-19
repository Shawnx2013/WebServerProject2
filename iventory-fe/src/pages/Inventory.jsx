import ItemCard from "../components/ItemCard";
import NavTopBar from "../components/NavTopBar";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

function Inventory() {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  const [userMetadata, setUserMetadata] = useState(null);
  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-8bqfizw3.us.auth0.com";
  
      try {
        const accessToken = await getAccessTokenSilently();

        console.log(accessToken);
  
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
  }, [getAccessTokenSilently, user?.sub]);

  return (
    <div>
      <div>
        {" "}
        <NavTopBar name={"Inventory"} />
      </div>
      {isAuthenticated && (
        <div>
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <h3>User Metadata</h3>
            {userMetadata ? (
              <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
            ) : (
              "No user metadata defined"
            )}
          </div>
          <div>
            {console.log(user)}
            <input
              placeholder="Search"
              className="w-2/4 bg-slate-300 rounded-md mt-20 h-12 ml-[25%] shadow-lg"
            />
          </div>
          <div className="flex mt-24 justify-evenly">
            <ItemCard
              productName={"Iphone 12"}
              stock={"Avaliable"}
              description={"Lorem Ipsum cdecdecdecdecdecdecde"}
            />
            <ItemCard
              productName={"Iphone 12"}
              stock={"Avaliable"}
              description={"Lorem Ipsum cdecdecdecdecdecdecde"}
            />
            <ItemCard
              productName={"Iphone 12"}
              stock={"Avaliable"}
              description={"Lorem Ipsum cdecdecdecdecdecdecde"}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Inventory;
