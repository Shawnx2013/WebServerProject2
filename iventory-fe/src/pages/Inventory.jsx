import { Search } from "@material-ui/icons";
import ItemCard from "../components/ItemCard";
import NavTopBar from "../components/NavTopBar";

function Inventory() {
  return (
    <div>
      <div>
        {" "}
        <NavTopBar name={"Inventory"} />
      </div>
      <div>
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
  );
}

export default Inventory;
