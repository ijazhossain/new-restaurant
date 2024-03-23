import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/usemenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();
  const handleDelete = (item) => {
    console.log(item);
    axiosSecure.delete(`http://localhost:5000/menu/${item._id}`).then((res) => {
      console.log("res from menu item delete", res.data);
      if (res.data.deletedCount > 0) {
        refetch();
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="w-[90%]">
      <SectionTitle
        subHeading="---Hurry Up!---"
        heading="MANAGE ALL ITEMS"
      ></SectionTitle>
      <div>
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>

              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="food image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>

                <td>${item.price}</td>
                <td>
                  <button className="btn btn-square bg-yellow-500 text-white">
                    <FaEdit />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-square bg-red-600 text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
