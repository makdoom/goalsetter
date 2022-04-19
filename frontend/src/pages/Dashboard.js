import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../features/auth/authSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector(selectUser);

  useEffect(() => {
    if (!user) return navigate("/login");
  }, [navigate, user]);
  return <div>Dashboard</div>;
};
export default Dashboard;
