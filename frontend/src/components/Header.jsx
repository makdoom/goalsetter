import { Link, useNavigate } from "react-router-dom";
import { HiOutlineSun, HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/auth/authSlice";
import { HiOutlineLogout } from "react-icons/hi";
import { setSearch } from "../features/notes/noteSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(selectUser);

  const [showNavigation, setShowNavigation] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="w-full z-[9999] bg-white fixed top-0 left-0 right-0 backdrop-blur-md px-4 border-b border-gray-100 md:px-28 lg:px-48 py-1 flex justify-between items-center ">
      <h3 className="text-2xl md:text-3xl font-bold text-primaryColor tracking-wide">
        iNotes
      </h3>
      {user && (
        <div
          className={`hidden lg:flex border-2 items-center flex-1 md:flex-0.4 p-2 rounded-lg ${
            isSearchActive && " border-blue-500"
          } `}
        >
          <FiSearch color="gray" />
          <input
            placeholder="Search notes"
            type="text"
            value={searchTerm}
            onChange={searchHandler}
            className="px-2 flex-1 outline-none"
            onFocus={() => setIsSearchActive(!isSearchActive)}
            onBlur={() => setIsSearchActive(!isSearchActive)}
          />
        </div>
      )}

      <div className="hidden md:flex items-center gap-8 py-4">
        {user ? (
          <div className="flex justify-between items-center gap-x-3">
            <h1 className="font-medium">Hello, {user?.name}</h1>
            <HiOutlineLogout
              fontSize={20}
              onClick={() => dispatch(logout())}
              className="cursor-pointer"
            />
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>

      <div className="md:hidden py-4 flex items-center gap-3">
        <HiOutlineMenu
          fontSize={25}
          onClick={() => setShowNavigation(!showNavigation)}
        />
      </div>
      {showNavigation && (
        <div className="bg-white z-50 transition-all duration-150 ease-linear md:hidden absolute gap-4 flex flex-col shadow-md right-6 w-40 rounded-lg top-[75px] p-4 px-4 border">
          {!user && (
            <>
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
            </>
          )}
          {user && (
            <p
              onClick={() => {
                setShowNavigation(!showNavigation);
                dispatch(logout());
                navigate("/login");
              }}
              className="hover:text-primaryColor flex justify-between items-center transition duration-200 ease-linear font-medium"
            >
              <h1 className="font-medium">Logout</h1>
              <HiOutlineLogout fontSize={20} className="cursor-pointer" />
            </p>
          )}
        </div>
      )}
    </div>
  );
};
export default Header;
