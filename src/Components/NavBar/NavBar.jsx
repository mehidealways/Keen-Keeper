import React from 'react';
import { Link, NavLink } from 'react-router';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineWatchLater } from 'react-icons/md';
import { ImStatsDots } from 'react-icons/im';

const NavBar = () => {
  return (
    <div className="shadow">
      <nav className="container flex justify-between items-center mx-auto ">
        <h2 className="text-xl font-bold">KeenKeeper</h2>
        <ul className="flex justify-between items-center gap-4 py-4 font-semibold">
          <li>
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                `${isActive ? 'bg-[#244d3f] p-2 text-white rounded-sm' : 'text-black'} flex items-center gap-1 p-2d-sm  transition`
              }
            >
              <IoHomeOutline /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/timeline'}
              className={({ isActive }) =>
                `${isActive ? 'bg-[#244d3f] p-2 text-white rounded-sm' : 'text-black'} flex items-center gap-1 p-2d-sm  transition`
              }
            >
              <MdOutlineWatchLater /> Timeline
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/stats'}
              className={({ isActive }) =>
                `${isActive ? 'bg-[#244d3f] p-2 text-white rounded-sm' : 'text-black'} flex items-center gap-1 p-2d-sm  transition`
              }
            >
              <ImStatsDots /> Stats
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
