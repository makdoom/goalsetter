import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex gap-2 flex-col justify-center items-center border w-4/5 md:max-w-[400px] p-5 sm:p-8  bg-bgLightPrimary rounded-lg shadow-lg">
      <h3 className="font-bold my-1 text-3xl sm:text-4xl tracking-wide text-blue-500 ">
        GoalSetter
      </h3>
      <div className="flex gap-3 w-full flex-col justify-center items-center my-5">
        <div className="flex flex-col justify-center items-start mb-2 w-full">
          <label htmlFor="name" className="mb-1 text-gray-600">
            Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border-2 transition-all duration-100 ease-linear focus-within:border-blue-500 rounded-lg outline-none "
            name="name"
          />
        </div>
        <div className="flex flex-col justify-center items-start mb-2 w-full">
          <label htmlFor="email" className="mb-1 text-gray-600">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border-2 transition-all duration-100 ease-linear focus-within:border-blue-500 rounded-lg outline-none"
            name="email"
          />
        </div>
        <div className="flex flex-col justify-center items-start mb-2 w-full">
          <label htmlFor="password" className="mb-1 text-gray-600">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border-2 transition-all duration-100 ease-linear focus-within:border-blue-500 rounded-lg outline-none"
            name="password"
          />
        </div>
        <div className="flex flex-col justify-center items-start mb-2 w-full">
          <label htmlFor="password" className="mb-1 text-gray-600">
            Confirm password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border-2 transition-all duration-100 ease-linear focus-within:border-blue-500 rounded-lg outline-none placehol"
            name="confirm password"
          />
        </div>

        <button
          type="submit"
          className="my-3 w-full py-3 rounded-lg text-white font-semibold tracking-wide bg-blue-500 transition-all duration-150 ease-linear hover:bg-blue-600 "
        >
          Register
        </button>
        <p className="text-gray-400">
          Already have an account ?{" "}
          <Link to="/login" className="text-blue-500 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Register;
