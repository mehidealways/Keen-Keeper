import React, { useState, useEffect } from 'react';
import { MdLocalPhone, MdDelete } from 'react-icons/md';
import { IoMailOutline } from 'react-icons/io5';
import { FaVideo } from 'react-icons/fa';

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Calls', value: 'Called', icon: <MdLocalPhone /> },
  { label: 'SMS', value: 'message', icon: <IoMailOutline /> },
  { label: 'Video', value: 'Video', icon: <FaVideo /> },
];

const TimeLine = () => {
  const [timeline, setTimeline] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  // Load timeline from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('timeline') || '[]');
    setTimeline(stored);
  }, []);

  const handleDelete = id => {
    const updated = timeline.filter(entry => entry.id !== id);
    setTimeline(updated);
    localStorage.setItem('timeline', JSON.stringify(updated));
  };

  const getIcon = action => {
    if (action.includes('Called'))
      return <MdLocalPhone className="text-green-600 text-xl" />;
    if (action.includes('message'))
      return <IoMailOutline className="text-blue-500 text-xl" />;
    if (action.includes('Video'))
      return <FaVideo className="text-purple-500 text-xl" />;
    return null;
  };

  // Filter timeline based on active filter
  const filteredTimeline =
    activeFilter === 'all'
      ? timeline
      : timeline.filter(entry => entry.action.includes(activeFilter));

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Timeline</h2>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-6">
        {FILTERS.map(filter => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium border transition
              ${
                activeFilter === filter.value
                  ? 'bg-[#244d3f] text-white border-[#244d3f]'
                  : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
              }`}
          >
            {filter.icon && <span>{filter.icon}</span>}
            {filter.label}
          </button>
        ))}
      </div>

      {filteredTimeline.length === 0 ? (
        <p className="text-gray-400 text-center mt-20">
          {activeFilter === 'all'
            ? 'No activity yet. Start by calling, texting, or video calling a friend!'
            : `No ${FILTERS.find(f => f.value === activeFilter)?.label} entries found.`}
        </p>
      ) : (
        <ul className="space-y-4">
          {filteredTimeline.map(entry => (
            <li
              key={entry.id}
              className="flex items-center justify-between bg-white shadow rounded-xl p-4"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  {getIcon(entry.action)}
                </div>
                <div>
                  <p className="font-semibold text-gray-700">
                    {entry.action}{' '}
                    <span className="text-green-600">{entry.friendName}</span>
                  </p>
                  <p className="text-xs text-gray-400">{entry.date}</p>
                </div>
              </div>

              <button
                onClick={() => handleDelete(entry.id)}
                className="text-red-400 hover:text-red-600 transition"
                title="Remove from timeline"
              >
                <MdDelete className="text-xl" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TimeLine;
