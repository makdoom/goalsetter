import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit handler
  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="flex gap-2 flex-col justify-center items-center border m-4 w-4/5 md:max-w-[400px] p-8  bg-bgLightPrimary rounded-lg shadow-lg">
      <h3 className="font-bold my-1 text-3xl sm:text-4xl tracking-wide text-blue-500 ">
        Login
      </h3>
      <form className="w-full" onSubmit={handleSubmit(submitHandler)}>
        <div className="flex gap-3 w-full flex-col justify-center items-center my-5">
          <div className="flex flex-col justify-center items-start mb-2 w-full">
            <label htmlFor="email" className="mb-1 text-gray-600">
              Email
            </label>
            <input
              type="email"
              className={`w-full px-3 py-2 border-2 transition-all duration-100 ease-linear focus-within:border-blue-500 rounded-lg outline-none ${
                errors.email && "border-red-500"
              }`}
              name="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-600 mt-1">
                The Email field is required
              </span>
            )}
          </div>
          <div className="flex flex-col justify-center items-start mb-2 w-full">
            <label htmlFor="password" className="mb-1 text-gray-600">
              Password
            </label>
            <input
              type="password"
              className={`w-full px-3 py-2 border-2 transition-all duration-100 ease-linear focus-within:border-blue-500 rounded-lg outline-none ${
                errors.password && "border-red-500"
              }`}
              name="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-600 mt-1">
                The Password field is required
              </span>
            )}
          </div>

          <button
            type="submit"
            className="my-3 w-full py-3 rounded-lg text-white font-semibold tracking-wide bg-blue-500 transition-all duration-150 ease-linear hover:bg-blue-600 "
          >
            Login
          </button>
          <p className="text-gray-400">
            Don't have an account ?{" "}
            <Link to="/register" className="text-blue-500 font-semibold">
              Create one
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;
