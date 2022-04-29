import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, reset, selectUser } from "../features/auth/authSlice";
import { useEffect } from "react";
import { BsX } from "react-icons/bs";
import Spinner from "../components/Spinner";
import ButtonSpinner from "../components/ButtonSpinner";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, message, isLoading, isError } = useSelector(selectUser);

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit handler
  const submitHandler = (data) => {
    dispatch(registerUser(data));
  };

  useEffect(() => {
    if (user) {
      console.log(user);
      return navigate("/");
    }

    if (isError || message) {
      setTimeout(() => {
        dispatch(reset());
      }, 3500);
    }
  }, [navigate, user, dispatch, isError, message, reset]);

  if (isLoading) return <Spinner />;

  return (
    <div className="w-screen border px-8 md:px-48 h-screen bg-secondaryColor flex justify-center items-center">
      <form
        action="POST"
        onSubmit={handleSubmit(submitHandler)}
        className="w-full md:max-w-[400px] bg-white border px-4 py-10 flex flex-col justify-center items-center shadow-md rounded-md gap-2 "
      >
        <h3 className="uppercase text-4xl font-semibold tracking-wide text-primaryColor">
          Register
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
              Name
            </label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              className={`w-full px-3 py-2 border-2 transition-all duration-100 ease-linear focus-within:border-primaryColor rounded-lg outline-none  ${
                errors.name && "border-red-500 focus-within:border-red-500 "
              }`}
            />
            {errors.name && (
              <span className="text-sm text-red-600 mt-1">
                The Name field is required
              </span>
            )}
          </div>
          <div className="mb-2">
            <label className="mb-1 text-gray-600" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
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
          <div className="mb-2">
            <label className="mb-1 text-gray-600" htmlFor="email">
              Confirm Password
            </label>
            <input
              type="password"
              name="cpassword"
              {...register("cpassword", { required: true })}
              className={`w-full px-3 py-2 border-2 transition-all duration-100 ease-linear focus-within:border-primaryColor rounded-lg outline-none  ${
                errors.cpassword &&
                "border-red-500 focus-within:border-red-500 "
              }`}
            />
            {errors.cpassword && (
              <span className="text-sm text-red-600 mt-1">
                The field is required
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-primaryColor font-semibold w-[90%] py-3 text-white tracking-wide rounded-lg"
        >
          Register
          {isLoading && <ButtonSpinner />}
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
