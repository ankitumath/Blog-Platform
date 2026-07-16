import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <h2 className="text-center mt-10">
        Loading Profile...
      </h2>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">

      <div className="flex flex-col items-center">

        <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">
          {user.name.charAt(0).toUpperCase()}
        </div>

        <h1 className="text-3xl font-bold mt-4">
          {user.name}
        </h1>

        <p className="text-gray-500">
          {user.email}
        </p>

      </div>

      <hr className="my-8" />

      <div className="space-y-4">

        <div>
          <h3 className="font-semibold">User ID</h3>
          <p>{user._id}</p>
        </div>

        <div>
          <h3 className="font-semibold">Joined</h3>
          <p>
            {new Date(user.createdAt).toLocaleDateString()}
          </p>
        </div>

      </div>

      <div className="mt-8">

        <Link
          to="/dashboard"
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Go to Dashboard
        </Link>

      </div>

    </div>
  );
};

export default Profile;