import React from 'react';
import { Link, NavLink } from 'react-router';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineWatchLater } from 'react-icons/md';
import { ImStatsDots } from 'react-icons/im';
import MyNavLink from './MyNavLink';

const NavBar = () => {
  return (
    <div className="shadow">
      <nav className="container flex justify-between items-center mx-auto ">
        <Link to={'/'} className="text-xl btn bg-white border-none font-bold">
          KeenKeeper
        </Link>
        <ul className="flex justify-between items-center gap-4 py-4 font-semibold">
          <li>
            <MyNavLink to={'/'}>
              <IoHomeOutline /> Home
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to={'/timeline'}>
              <MdOutlineWatchLater /> Timeline
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to={'/stats'}>
              <ImStatsDots /> Stats
            </MyNavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
