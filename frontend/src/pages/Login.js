import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-screen border px-8 md:px-48 h-[93vh] flex justify-center items-center">
      <div className="w-full md:max-w-[400px] border px-4 py-10 flex flex-col justify-center items-center shadow-md rounded-md gap-2 ">
        <h3 className="uppercase text-4xl font-semibold tracking-wide text-primaryColor">
          Login
        </h3>
        <div className="flex flex-col w-4/5 my-4 gap-3">
          <div className="mb-2">
            <label className="mb-1 text-gray-600" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border-2 transition-all duration-100 ease-linear focus-within:border-primaryColor rounded-lg outline-none"
            />
          </div>
          <div className="mb-2">
            <label className="mb-1 text-gray-600" htmlFor="email">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border-2 transition-all duration-100 ease-linear focus-within:border-primaryColor rounded-lg outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-primaryColor font-semibold w-4/5 py-3 text-white tracking-wide rounded-lg"
        >
          Login
        </button>
        <p className="mt-2 text-gray-500">
          Don't have an Account ?{" "}
          <Link className="text-blue-500 font-semibold" to="/regitser">
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
