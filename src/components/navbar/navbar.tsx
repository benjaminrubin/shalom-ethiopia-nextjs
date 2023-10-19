import React from "react";
import Logo from "../logo/logo";
import NavLink from "./navlink";
import RequestBooking from "./request-booking";

const NavBar = () => {
  return (
    <div className='container mx-auto pt-6'>
      <nav className='flex justify-between container mx-4 md:mx-auto'>
        <Logo />
        <div className='hidden md:flex justify-around gap-5'>
          <RequestBooking />
          <NavLink href='/our-tours' label='Our Tours' />
          <NavLink href='/about-ethiopia' label='About Ethiopia' />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
