import MenuItem from "../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
  return (
    <div className="grid md:grid-cols-2 gap-10 my-[100px]">
      {items.map((item) => (
        <MenuItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default MenuCategory;
