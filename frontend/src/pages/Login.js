import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { BsX } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, reset, selectUser } from "../features/auth/authSlice";

const Login = () => {
  const { user, message, isSuccess, isError, isLoading } =
    useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Login Submit handler
  const submitHandler = (data) => {
    console.log(data);
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (user) return navigate("/");

    if (isError || message) {
      setTimeout(() => {
        dispatch(reset());
      }, 3500);
    }
  }, [navigate, user, isError, message, dispatch, reset]);

  return (
    <div className="w-screen border px-8 md:px-48 h-[93vh] flex justify-center items-center">
      <form
        action="POST"
        onSubmit={handleSubmit(submitHandler)}
        className="w-full md:max-w-[400px] border px-4 py-10 flex flex-col justify-center items-center shadow-md rounded-md gap-2 "
      >
        <h3 className="uppercase text-4xl font-semibold tracking-wide text-primaryColor">
          Login
        </h3>
        {message && (
          <div className="flex justify-between items-center w-[90%] border mt-2 p-2 px-3 text-sm rounded-lg bg-red-100 text-red-600">
            <p>{message}</p>
            <BsX
              fontSize={25}
              className="cursor-pointer"
              onClick={() => dispatch(reset())}
            />
          </div>
        )}
        <div className="flex flex-col w-[90%] my-4 gap-3">
          <div className="mb-2">
            <label className="mb-1 text-gray-600" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              required
              {...register("email", { required: true })}
              className={`w-full px-3 py-2 border-2 transition-all duration-100 ease-linear focus-within:border-primaryColor rounded-lg outline-none  ${
                errors.email && "border-red-500 focus-within:border-red-500 "
              }`}
            />
            {errors.email && (
              <span className="text-sm text-red-600 mt-1">
                The Email field is required
              </span>
            )}
          </div>
          <div className="mb-2">
            <label className="mb-1 text-gray-600" htmlFor="email">
              Password
            </label>
            <input
              type="password"
              name="password"
              {...register("password", { required: true })}
              className={`w-full px-3 py-2 border-2 transition-all duration-100 ease-linear focus-within:border-primaryColor rounded-lg outline-none  ${
                errors.password && "border-red-500 focus-within:border-red-500 "
              }`}
            />
            {errors.password && (
              <span className="text-sm text-red-600 mt-1">
                The Password field is required
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-primaryColor font-semibold w-[90%] py-3 text-white tracking-wide rounded-lg"
        >
          Login
        </button>
        <p className="mt-2 text-gray-500">
          Don't have an Account ?{" "}
          <Link className="text-blue-500 font-semibold" to="/register">
            Create One
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
