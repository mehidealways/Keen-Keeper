import React, { use } from 'react';
import { FaRegBell, FaVideo } from 'react-icons/fa';
import { IoArchiveOutline, IoMailOutline } from 'react-icons/io5';
import { MdDelete, MdLocalPhone } from 'react-icons/md';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
const friendsPromise = fetch('/public/friends.json').then(res => res.json());

const AddDetails = () => {
  const friends = use(friendsPromise);
  // console.log(friends);
  const { id } = useParams();
  console.log(id, 'expected id');
  // console.log(friend);
  
  const friend = friends.find(friend => friend.id == id);
  return (
    <div className="container mx-auto flex justify-center mt-10">
      <div>
        <div className="  border w-75 text-center border-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition ">
          <img src={friend.picture} alt="" className="mx-auto" />
          <h2 className="text-xl font-bold">{friend.name}</h2>
          {friend?.tags?.map(tag => (
            <span
              key={tag}
              className="bg-green-100 text-green-800 text-xs font-medium px-2 mr-1 py-1 rounded"
            >
              {tag}
            </span>
          ))}
          <p className="text-gray-400 mt-0.5">
            <i>{friend.bio}</i>
          </p>
        </div>

        {/* 3 sections */}
        <div>
          <div className="  border w-75 text-center border-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <p className="flex items-center justify-center gap-2">
              <FaRegBell />
              Snooze 2 weeks
            </p>
          </div>
          <div className="  border w-75 text-center border-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition ">
            <p className="flex items-center justify-center gap-2">
              <IoArchiveOutline />
              Archive
            </p>
          </div>

          <div className="  border w-75 text-center border-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition ">
            <p className="flex items-center justify-center gap-2 text-red-400">
              <MdDelete />
              Delete
            </p>
          </div>
        </div>
      </div>

      {/* Right sidebar */}
      <div>
        <div className="max-w-6xl mx-auto p-4 space-y-6">
          {/* Top Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white shadow rounded-xl p-5 text-center">
              <h2 className="text-2xl font-bold text-green-700">
                {friend.days_since_contact}
              </h2>
              <p className="text-gray-500 text-sm">Days Since Contact</p>
            </div>

            <div className="bg-white shadow rounded-xl p-5 text-center">
              <h2 className="text-2xl font-bold text-green-700">
                {friend.goal}
              </h2>
              <p className="text-gray-500 text-sm">Goal (Days)</p>
            </div>

            <div className="bg-white shadow rounded-xl p-5 text-center">
              <h2 className="text-2xl font-bold text-green-700">
                {friend.next_due_date}
              </h2>
              <p className="text-gray-500 text-sm">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white shadow rounded-xl p-5 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-700 mb-1">
                Relationship Goal
              </h3>
              <p className="text-gray-500 text-sm">
                Connect every:
                <span className="font-semibold text-black ml-1">
                   { friend.goal} days
                </span>
              </p>
            </div>

            <button className="bg-gray-100 hover:bg-gray-200 text-sm px-4 py-1.5 rounded">
              Edit
            </button>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white shadow rounded-xl p-5">
            <h3 className="font-semibold text-gray-700 mb-4">Quick Check-In</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Call Button */}
              <button
                onClick={() => toast.success('Calling friend...')}
                className="flex flex-col items-center justify-center border border-gray-400 rounded-lg p-4 hover:bg-gray-50 transition"
              >
                <MdLocalPhone className="text-xl" />
                <span className="mt-2 text-sm text-gray-600">Call</span>
              </button>

              {/* Text Button */}
              <button
                onClick={() => toast.success('Sending message...')}
                className="flex flex-col items-center justify-center border border-gray-400 rounded-lg p-4 hover:bg-gray-50 transition"
              >
                <IoMailOutline />
                <span className="mt-2 text-sm text-gray-600">Text</span>
              </button>

              {/* Video Button */}
              <button
                onClick={() => toast.success('Starting video call...')}
                className="flex flex-col items-center justify-center border border-gray-400 rounded-lg p-4 hover:bg-gray-50 transition"
              >
                <FaVideo />
                <span className="mt-2 text-sm text-gray-600">Video</span>
              </button>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDetails;
