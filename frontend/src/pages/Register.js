import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, selectUser } from "../features/auth/authSlice";
import { useEffect } from "react";

const Register = () => {
  const dispatch = useDispatch();

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit handler
  const submitHandler = (data) => {
    console.log(data);
    dispatch(registerUser(data));
  };

  return (
    <div className="w-screen border px-8 md:px-48 h-[93vh] flex justify-center items-center">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-full md:max-w-[400px] border px-4 py-10 flex flex-col justify-center items-center shadow-md rounded-md gap-2 "
      >
        <h3 className="uppercase text-4xl font-semibold tracking-wide text-primaryColor">
          Register
        </h3>
        <div className="flex flex-col w-[90%] my-4 gap-3">
          <div className="mb-2">
            <label className="mb-1 text-gray-600" htmlFor="email">
              Name
            </label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              className="w-full px-3 py-2 border-2 transition-all duration-100 ease-linear focus-within:border-primaryColor rounded-lg outline-none"
            />
          </div>
          <div className="mb-2">
            <label className="mb-1 text-gray-600" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              className="w-full px-3 py-2 border-2 transition-all duration-100 ease-linear focus-within:border-primaryColor rounded-lg outline-none"
            />
          </div>
          <div className="mb-2">
            <label className="mb-1 text-gray-600" htmlFor="email">
              Password
            </label>
            <input
              type="password"
              name="password"
              {...register("password", { required: true })}
              className="w-full px-3 py-2 border-2 transition-all duration-100 ease-linear focus-within:border-primaryColor rounded-lg outline-none"
            />
          </div>
          <div className="mb-2">
            <label className="mb-1 text-gray-600" htmlFor="email">
              Confirm Password
            </label>
            <input
              type="password"
              name="cpassword"
              {...register("cpassword", { required: true })}
              className="w-full px-3 py-2 border-2 transition-all duration-100 ease-linear focus-within:border-primaryColor rounded-lg outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-primaryColor font-semibold w-[90%] py-3 text-white tracking-wide rounded-lg"
        >
          Register
        </button>
        <p className="mt-2 text-gray-500">
          Already have an Account ?{" "}
          <Link className="text-blue-500 font-semibold" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Register;
