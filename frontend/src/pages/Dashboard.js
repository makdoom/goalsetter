import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoalItem from "../components/GoalItem";
import Header from "../components/Header";
import { selectUser } from "../features/auth/authSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector(selectUser);

  useEffect(() => {
    if (!user) return navigate("/login");
  }, [navigate, user]);

  return (
    <div className="w-full h-full">
      <Header />

      <div className="px-36  mt-10 w-full h-full flex flex-col justify-center items-center">
        <div className="w-1/3">
          <form className="w-full flex justify-between items-center border-blue-500 border-2 rounded-lg shadow-lg  ">
            <input
              type="text"
              placeholder="Add goals"
              className="w-[300px] flex-1 px-3 p-1 rounded-lg  transition-all duration-150 ease-in flex items-center outline-none "
            />
            <button
              type="submit"
              className="bg-blue-500 text-base px-5 py-3 rounded-md font-medium text-white  hover:bg-blue-600 transition-all duration-150 ease-linear"
            >
              Add Goal
            </button>
          </form>
        </div>

        <div className="w-full mt-20 flex items-center gap-10 flex-wrap">
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
