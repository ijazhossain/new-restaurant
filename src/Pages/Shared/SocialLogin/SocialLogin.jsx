import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        const savedUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User registration successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="flex items-center justify-center flex-col pb-8">
      <div className="divider">OR</div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-circle bg-black text-white text-xl"
      >
        G
      </button>
    </div>
  );
};

export default SocialLogin;
