import MasonryLayout from "../components/MasonaryLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { getNotes } from "../features/notes/noteSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector(selectUser);

  useEffect(() => {
    if (!user) return navigate("/login");
  }, [navigate, user]);

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  if (isLoading) return <Spinner />;

  return (
    <div className="bg-secondaryColor pt-12">
      <div className=" relative w-full px-4 md:px8 xl:px-48 my-4 min-h-[88vh]">
        <MasonryLayout />
      </div>
    </div>
  );
};
export default Dashboard;
