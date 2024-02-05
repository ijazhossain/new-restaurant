import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ item }) => {
  return (
    <div className="grid md:grid-cols-4 gap-4 my-12 w-[90%] mx-auto">
      {item.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
