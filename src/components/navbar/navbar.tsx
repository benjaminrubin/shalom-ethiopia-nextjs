import React, { useState } from "react";
import Logo from "../logo/logo";
import NavLink from "./navlink";
import RequestBooking from "./request-booking";
import MobileMenuIcon from "./mobile-menu-icon";
import Image from "next/image";
import NavBackground from "./nav-background";

const NavBar = () => {
  return (
    <>
      <NavBackground />
      <div className='fixed px-4 top-0 sm:left-10 sm:right-10 container mx-auto xl:px-64 pt-4 z-50 '>
        <nav className='flex justify-between'>
          <Logo />
          <div className='hidden md:flex justify-around gap-5'>
            <RequestBooking />
            <NavLink href='/our-tours' label='Our Tours' />
            <NavLink href='/about-ethiopia' label='About Ethiopia' />
          </div>
          <MobileMenuIcon />
        </nav>
      </div>
    </>
  );
};

export default NavBar;
