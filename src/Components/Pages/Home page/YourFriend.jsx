import { use } from "react";
import FriendCard from "../../ui/FriendCard";


const friendsPromise = fetch('/public/friends.json').then((res) => res.json());

const YourFriend = () => {
  const friends = use(friendsPromise);
  console.log(friends);
  return (
    <>
      <div className="container mx-auto mt-10 ">
        <h2 className="text-xl font-bold">Your Friends</h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-5">
        <div
          className="grid 
                  grid-cols-1 
                  sm:grid-cols-2 
                  md:grid-cols-3 
                  lg:grid-cols-4 
                  gap-6"
        >
          {friends.map(friend => (
            <FriendCard friend={friend}></FriendCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default YourFriend;
