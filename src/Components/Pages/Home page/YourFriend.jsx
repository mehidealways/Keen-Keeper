import { use, Suspense } from 'react';
import FriendCard from '../../ui/FriendCard';

const friendsPromise = fetch('/friends.json').then(res => res.json());

const FriendsList = () => {
  const friends = use(friendsPromise);
  return (
    <div className="max-w-7xl mx-auto px-4 mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {friends.map(friend => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

const LoadingSpinner = () => (
  <div className="flex justify-center items-center mt-20">
    <div className="w-12 h-12 border-4 border-gray-200 border-t-green-500 rounded-full animate-spin" />
  </div>
);

const YourFriend = () => (
  <>
    <div className="container mx-auto mt-10">
      <h2 className="text-xl font-bold">Your Friends</h2>
    </div>
    <Suspense fallback={<LoadingSpinner />}>
      <FriendsList />
    </Suspense>
  </>
);

export default YourFriend;
