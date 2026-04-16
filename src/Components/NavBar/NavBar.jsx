import React from 'react';
import { Link } from 'react-router';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineWatchLater } from 'react-icons/md';
import { ImStatsDots } from 'react-icons/im';

const NavBar = () => {
  return (
    <div className="shadow">
      <nav className="container flex justify-between items-center mx-auto ">
        <h2 className='text-xl font-bold'>KeenKeeper</h2>
        <ul className="flex justify-between items-center gap-4 py-4 font-semibold">
          <li>
            <Link to={'/'} className="flex items-center gap-1">
              <IoHomeOutline />
              Home
            </Link>
          </li>
          <li>
            <Link to={'/timeline'} className="flex items-center gap-1">
              <MdOutlineWatchLater /> Timeline
            </Link>
          </li>
          <li>
            <Link to={'/stats'} className="flex items-center gap-1">
              <ImStatsDots /> Stats
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
