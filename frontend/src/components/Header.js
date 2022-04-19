import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

const Header = () => {
  const [isInputActive, setIsInputActive] = useState(false);
  return (
    <div className="w-full p-4 shadow-sm sm:px-36 border sm:m-auto border-b-gray-200 ">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-blue-500">Goal Setter</h3>
        <div>
          <h3 className="text-2xl font-medium">Welcome Makdoom</h3>
        </div>
        <div
          className={`w-[300px] border-2 transition-all duration-150 ease-in flex items-center px-2 p-1 rounded-xl border-gray-300 ${
            isInputActive && "border-blue-500 "
          }`}
        >
          <RiSearchLine />
          <input
            type="text"
            placeholder="Search Goal"
            className="w-full ml-3 outline-none text-base "
            onFocus={() => setIsInputActive(!isInputActive)}
            onBlur={() => setIsInputActive(!isInputActive)}
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
