import { Link } from "react-router-dom";
import { HiOutlineSun } from "react-icons/hi";

const Header = () => {
  return (
    <div className="w-full border-b px-48 py-1 flex justify-between items-center ">
      <h3 className="text-3xl font-bold text-primaryColor tracking-wide">
        iNotes
      </h3>
      <div className="flex items-center gap-8 py-4">
        <Link
          to="/register"
          className="hover:text-primaryColor transition duration-200 ease-linear font-medium"
        >
          Register
        </Link>
        <Link
          to="/login"
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
    </div>
  );
};
export default Header;
