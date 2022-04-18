import { Link } from "react-router-dom";

function ItemCard({ productName, stock, description, product }) {
  return (
    <div className="bg-slate-100 text-black w-[25rem] h-[12.25rem] p-4 rounded-md shadow-lg ">
      <div className="text-bold text-black  text-2xl">{productName}</div>
      <div className="mt-2">{stock}</div>
      <div className="mt-2">{description}</div>
      <Link to={"/item"}>
        <button
          className=" bg-orange-500 w-2/4 h-10 rounded-md mt-4"
          // onClick={() => loginWithRedirect()}
        >
          View
        </button>
      </Link>
    </div>
  );
}

export default ItemCard;
