import {
  FaBars,
  FaCalendarAlt,
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-yellow-600 text-base-content">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <NavLink to="/dashboard/home" className="flex items-center p-2">
                <FaHome className="mr-2" />
                Admin Home
              </NavLink>

              <NavLink
                to="/dashboard/addItems"
                className="flex items-center p-2"
              >
                <FaUtensils className="mr-2" />
                Add Items
              </NavLink>

              <NavLink
                to="/dashboard/manageItems"
                className="flex items-center p-2"
              >
                <FaBars className="mr-2" />
                ManageItems
              </NavLink>
              <NavLink
                to="/dashboard/allusers"
                className="flex items-center p-2"
              >
                <FaUsers className="mr-2" />
                All Users
              </NavLink>

              <NavLink className="flex items-center p-2" to="/dashboard/mycart">
                <FaShoppingCart className="mr-2" /> My Cart
                <div className="badge badge-secondary ml-4">
                  +{cart?.length}
                </div>
              </NavLink>

              <div className="divider"></div>

              <NavLink className="flex items-center p-2" to="/menu">
                <FaHome className="mr-2" /> Home
              </NavLink>

              <NavLink className="flex items-center p-2" to="/menu">
                <FaBars className="mr-2" /> Menu
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/dashboard/home" className="flex items-center p-2">
                <FaHome className="mr-2" />
                User Home
              </NavLink>

              <NavLink
                to="/dashboard/reservations"
                className="flex items-center p-2"
              >
                <FaCalendarAlt className="mr-2" />
                Reservations
              </NavLink>

              <NavLink
                to="/dashboard/history"
                className="flex items-center p-2"
              >
                <FaWallet className="mr-2"></FaWallet>Payment history
              </NavLink>

              <NavLink className="flex items-center p-2" to="/dashboard/mycart">
                <FaShoppingCart className="mr-2" /> My Cart
                <div className="badge badge-secondary ml-4">
                  +{cart?.length}
                </div>
              </NavLink>

              <div className="divider"></div>

              <NavLink className="flex items-center p-2" to="/menu">
                <FaHome className="mr-2" /> Home
              </NavLink>

              <NavLink className="flex items-center p-2" to="/menu">
                <FaBars className="mr-2" /> Menu
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
