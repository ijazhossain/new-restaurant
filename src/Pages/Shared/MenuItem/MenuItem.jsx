const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item;

  return (
    <div className="flex gap-3">
      <div>
        <img
          style={{ borderRadius: "0px 200px 200px 200px" }}
          className="w-[118px]"
          src={image}
          alt=""
        />
      </div>
      <div>
        <h4>{name} ------------------------</h4>
        <p>{recipe}</p>
      </div>
      <div>
        <p className="text-[#BB8506]">{price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
