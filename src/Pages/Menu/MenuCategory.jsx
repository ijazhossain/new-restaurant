import { Link } from "react-router-dom";
import MenuItem from "../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-10 my-[100px]">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link
        className="flex items-center justify-center mb-12"
        to={`/order/${title}`}
      >
        <button className="btn btn-outline border-0 border-b-4 mt-4 ">
          Order Now
        </button>
      </Link>
    </>
  );
};

export default MenuCategory;
