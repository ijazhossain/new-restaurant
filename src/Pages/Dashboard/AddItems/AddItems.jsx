import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

console.log(img_hosting_token);
const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const [axiosSecure] = useAxiosSecure();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        console.log("imageData", imageData);
        if (imageData.success) {
          const imageUrl = imageData.data.display_url;
          console.log("imageUrl", imageUrl);
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imageUrl,
          };
          console.log("newItem", newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  return (
    <div className="w-[90%] bg-[#F3F3F3] text-center p-8 space-y-8 rounded-md">
      <h1 className="font-semibold text-3xl">UPDATE ITEM</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text ">Recipe Name*</span>
          </div>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full"
          />
        </label>
        <div className="flex items-center justify-between">
          <label className="form-control w-[40%] ">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <select
              defaultValue="Pick One"
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Category</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Drinks</option>
            </select>
          </label>
          <label className="form-control w-[40%] ">
            <div className="label">
              <span className="label-text">Price*</span>
            </div>
            <input
              {...register("price", { required: true })}
              type="text"
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Recipe Details</span>
          </div>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
          ></textarea>
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Item Image*</span>
          </div>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </label>

        <input
          style={{ backgroundImage: "linear-gradient(90deg, #835D23, #B58130" }}
          type="submit"
          defaultValue="Upload Recipe Details"
          className="btn text-white mt-12"
        />
      </form>
    </div>
  );
};

export default AddItems;
