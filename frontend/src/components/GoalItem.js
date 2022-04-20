import { BsX } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const GoalItem = () => {
  return (
    <div className="p-4 w-[350px] bg-white border rounded-md transition-all duration-200 ease-linear hover:shadow-lg">
      <div className="flex justify-between items-center">
        <p className="bg-blue-200 px-2 text-xs py-1 text-blue-600 font-medium rounded-lg">
          23<sup>rd</sup> March 2022
        </p>
        <div className="cursor-pointer">
          <FiEdit2 />
        </div>
      </div>
      <h3 className="my-3 text-xl">Makdoom</h3>
      <div className="flex justify-end">
        <div className="cursor-pointer p-2 rounded-full border border-red-400 hover:bg-red-200 transition-all duration-150 ease-linear">
          <AiOutlineDelete color="red" />
        </div>
      </div>
    </div>
  );
};
export default GoalItem;
