import { useAuth } from "../../context/AuthContext";

const CommentCard = ({ comment, onDelete }) => {
  const { user } = useAuth();

  return (
    <div className="border rounded-lg p-4 mb-3 bg-gray-50">

      <div className="flex justify-between">

        <div>

          <h4 className="font-semibold">
            {comment.userId?.name}
          </h4>

          <p className="text-gray-700 mt-2">
            {comment.text}
          </p>

        </div>

        {user?._id === comment.userId?._id && (
          <button
            onClick={() => onDelete(comment._id)}
            className="text-red-600"
          >
            Delete
          </button>
        )}

      </div>

    </div>
  );
};

export default CommentCard;