import React from 'react';
import { NavLink } from 'react-router';
import { IoHomeOutline } from 'react-icons/io5';

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive ? 'bg-[#244d3f] p-2 text-white rounded-sm' : 'text-black'} flex items-center gap-1 p-2d-sm  transition`
      }
    >
   
      {children}
    </NavLink>
  );
};

export default MyNavLink;
