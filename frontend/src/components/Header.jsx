import { Link, useNavigate } from "react-router-dom";
import { HiOutlineSun } from "react-icons/hi";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative w-full px-6 border-b md:px-48 py-1 flex justify-between items-center ">
      <h3 className="text-3xl font-bold text-primaryColor tracking-wide">
        iNotes
      </h3>
      <div className="hidden md:flex items-center gap-8 py-4">
        <Link
          to="register"
          className="hover:text-primaryColor transition duration-200 ease-linear font-medium"
        >
          Register
        </Link>
        <Link
          to="login"
          className="hover:text-primaryColor transition duration-200 ease-linear font-medium"
        >
          Login
        </Link>
        <div className="border-l">
          <HiOutlineSun
            fontSize={25}
            className="ml-4 cursor-pointer hover:text-primaryColor transition duration-200 ease-linear font-medium"
          />
        </div>
      </div>
      <div
        className="md:hidden py-4"
        onClick={() => setShowNavigation(!showNavigation)}
      >
        <HiOutlineMenu fontSize={25} />
      </div>
      {showNavigation && (
        <div className=" transition-all duration-150 ease-linear md:hidden absolute gap-4 flex flex-col shadow-md right-6 w-40 rounded-lg top-[75px] p-4 px-4 border bg-white">
          <p
            onClick={() => {
              setShowNavigation(!showNavigation);
              navigate("/register");
            }}
            className="hover:text-primaryColor transition duration-200 ease-linear font-medium"
          >
            Register
          </p>
          <p
            onClick={() => {
              setShowNavigation(!showNavigation);
              navigate("/login");
            }}
            className="hover:text-primaryColor transition duration-200 ease-linear font-medium"
          >
            Login
          </p>
          <div className="flex items-center">
            <p className="hover:text-primaryColor transition duration-200 ease-linear font-medium">
              Darkmode
            </p>
            <HiOutlineSun
              fontSize={25}
              className=" ml-2 cursor-pointer hover:text-primaryColor transition duration-200 ease-linear font-medium"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
