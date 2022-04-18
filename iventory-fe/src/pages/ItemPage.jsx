import NavTopBar from "../components/NavTopBar";

function ItemPage({ stock, description }) {
  return (
    <div>
      <div>
        <NavTopBar name={"Item page"} />
      </div>
      <div>
        <p>{stock}</p>
        <p>{description}</p>

        <button
          className=" bg-orange-500 w-1/4 h-10 rounded-md mt-4"
          // onClick={() => loginWithRedirect()}
        >
          Edit
        </button>
        <button
          className=" bg-orange-500 w-1/4 h-10 rounded-md mt-4"
          // onClick={() => loginWithRedirect()}
        >
          View
        </button>
      </div>
    </div>
  );
}

export default ItemPage;
