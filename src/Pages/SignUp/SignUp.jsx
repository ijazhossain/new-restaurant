import coverImg from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import loginImg from "../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photo)
          .then(() => {
            const savedUser = { name: data.name, email: data.email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(savedUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User registration successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <>
      <Helmet>
        <title>Bisrto Restaurant | Signup</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `url("${coverImg}")`,
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-evenly items-center h-full flex-row-reverse">
          <div>
            <img className="flex-1" src={loginImg} alt="" />
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex-1 ">
              <h2 className="text-center text-[40px] font-bold">Signup</h2>
              <div className="space-y-2 mb-[24px]">
                <label htmlFor="email">Name</label>
                <input
                  {...register("name", { required: true })}
                  className="w-full px-[20px] py-[15px] rounded-md bg-[white]"
                  type="text"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">
                    This field is required.
                  </p>
                )}
              </div>
              <div className="space-y-2 mb-[24px]">
                <label htmlFor="photo">Photo URL</label>
                <input
                  {...register("photo", { required: true })}
                  className="w-full px-[20px] py-[15px] rounded-md bg-[white]"
                  type="text"
                />
                {errors.photo && (
                  <p className="text-red-500 text-xs">
                    This field is required.
                  </p>
                )}
              </div>
              <div className="space-y-2 mb-[24px]">
                <label htmlFor="email">Email</label>
                <input
                  {...register("email", { required: true })}
                  className="w-full px-[20px] py-[15px] rounded-md bg-[white]"
                  type="email"
                  name="email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">
                    This field is required.
                  </p>
                )}
              </div>
              <div className="space-y-2 mb-[24px]">
                <label htmlFor="password">Password</label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  })}
                  className="w-full  px-[20px] py-[15px] rounded-md bg-[white]"
                  type="text"
                  name="password"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 text-xs">
                    This field is required.
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 text-xs">
                    Min Length is 8 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500 text-xs">
                    Password requires one uppercase one lowercase one special
                    character
                  </p>
                )}
              </div>

              <input
                className="w-full bg-[#D1A054] py-2 font-semibold text-white rounded-lg"
                type="submit"
                value="Sign Up"
                disabled={false}
              />
            </form>
            <p className="px-[50px] pt-4 pb-[50px]">
              <small>Already have an account? </small>
              <Link to="/login">Login</Link>
            </p>
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
