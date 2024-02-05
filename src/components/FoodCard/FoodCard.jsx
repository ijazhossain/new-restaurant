const FoodCard = ({ item }) => {
  const { _id, name, recipe, image, category, price } = item;
  console.log({ _id, name, recipe, image, category });
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="text-white bg-[#111827] absolute top-2 right-3 px-3 rounded-md text-xs py-1">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="text-center font-semi-bold text-lg font-semibold">
          {name}
        </h2>
        <p className="text-sm  text-[#737373]">{recipe}</p>
        <div className="card-actions justify-end">
          <button className="mx-auto mt-4 center text-[#BB8506] bg-[#E8E8E8] px-5 py-2 rounded-lg border-b-2 border-[#BB8506]  hover:bg-[#111827]">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
