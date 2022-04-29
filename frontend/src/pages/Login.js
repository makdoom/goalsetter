import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import { selectUser } from "../features/auth/authSlice";

const Login = () => {
  const { user } = useSelector(selectUser);
  const navigate = useNavigate();

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Login Submit handler
  const submitHandler = (data) => {
    console.log(data);
    // dispatch(registerUser(data));
  };

  useEffect(() => {
    if (user) return navigate("/");
  }, [navigate, user]);

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
