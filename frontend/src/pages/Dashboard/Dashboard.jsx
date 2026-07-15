import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-5xl mx-auto mt-10">

      <h1 className="text-4xl font-bold">
        Welcome,
      </h1>

      <h2 className="text-2xl mt-3 text-blue-600">
        {user?.name}
      </h2>

      <p className="mt-4 text-gray-600">
        Email: {user?.email}
      </p>

    </div>
  );
};

export default Dashboard;