import { Link } from "react-router-dom";

function ItemCard({ productName, stock, description, onTap }) {
  return (
    <div className="bg-slate-100 text-black w-[25rem] h-[12.25rem] p-4 rounded-md shadow-lg mt-4 mb-4 ">
      <div className="text-bold text-orange-500  text-2xl">{productName}</div>
      <div className="mt-2">{stock}</div>
      <div className="mt-2">{description}</div>
      <button
        className=" bg-orange-500 w-2/4 h-10 rounded-md mt-4 text-white"
        onClick={onTap}
      >
        View
      </button>
    </div>
  );
}

export default ItemCard;
