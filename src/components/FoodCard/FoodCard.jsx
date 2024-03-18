import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { _id, name, recipe, image, price } = item;
  // console.log({ _id, name, recipe, image, category });
  const [, refetch] = useCart();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food added on the cart successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to order the food",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
          <button
            onClick={() => handleAddToCart()}
            className="mx-auto mt-4 center text-[#BB8506] bg-[#E8E8E8] px-5 py-2 rounded-lg border-b-2 border-[#BB8506]  hover:bg-[#111827]"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
