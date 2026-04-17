import { Link } from 'react-router';

const FriendCard = ({ friend }) => {
  return (
    <Link
      to={`/timeline/${friend.id}`}
      className="border text-center border-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition"
    >
      {/* Image */}
      <img
        src={friend.picture}
        alt={friend.name}
        className=" h-30 object-cover rounded-md mb-3 mx-auto"
      />

      {/* Name */}
      <h2 className="text-black font-semibold text-lg">{friend?.name}</h2>

      {/* Days */}
      <p className="text-gray-500 mb-2 text-sm">
        {friend.days_since_contact} days ago
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 justify-center">
        {friend.tags.map(tag => (
          <span
            key={tag}
            className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded "
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default FriendCard;
