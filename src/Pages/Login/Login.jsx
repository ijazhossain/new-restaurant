import coverImg from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import loginImg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
const Login = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState("");
  const captchaRef = useRef(null);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  const handleValidate = () => {
    const user_captcha_value = captchaRef.current.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setIsDisabled(false);
      console.log(isDisabled);
    } else {
      setIsDisabled(true);
      console.log(isDisabled);
    }
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  return (
    <>
      <Helmet>
        <title>Bisrto Restaurant | Login</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `url("${coverImg}")`,
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <div className="flex items-center h-full">
          <div>
            <img className="flex-1" src={loginImg} alt="" />
          </div>
          <div>
            <form onSubmit={onSubmit} className="flex-1 px-[50px] pt-[50px]">
              <h2 className="text-center text-[40px] font-bold">Login</h2>
              <div className="space-y-2 mb-[24px]">
                <label htmlFor="email">Email</label>
                <input
                  className="w-full px-[20px] py-[15px] rounded-md bg-[white]"
                  type="email"
                  name="email"
                />
              </div>
              <div className="space-y-2 mb-[24px]">
                <label htmlFor="password">Password</label>
                <input
                  className="w-full  px-[20px] py-[15px] rounded-md bg-[white]"
                  type="password"
                  name="password"
                />
              </div>
              <div className="space-y-2 mb-[24px]">
                <label htmlFor="captcha">
                  <LoadCanvasTemplate />
                </label>
                <input
                  ref={captchaRef}
                  className="w-full  px-[20px] py-[15px] rounded-md bg-[white]"
                  type="text"
                  name="Type the text above"
                />
              </div>
              <button
                onClick={handleValidate}
                className="btn btn-xs mb-4 bg-slate-900 text-white"
              >
                validate
              </button>
              <p className="text-red-500 text-xs mb-3">{error}</p>
              <input
                className="w-full bg-[#D1A054] py-2 font-semibold text-white rounded-lg"
                type="submit"
                value="Sign In"
                disabled={false}
              />
            </form>
            <p className="px-[50px] pt-4 pb-[50px]">
              <small>New here? </small>
              <Link to="/register">Create a new account</Link>
            </p>
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
