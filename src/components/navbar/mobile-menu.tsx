"use-client";
import React, { useState } from "react";
import NavLink from "./navlink";
import RequestBooking from "./request-booking";
import Image from "next/image";
import MobileNavLink from "./mobile-navlink";

type PropTypes = {
  innerRef: React.MutableRefObject<null>;
  hideMobileMenu: () => void;
};

const MobileMenu = ({ innerRef, hideMobileMenu }: PropTypes) => {
  return (
    <>
      <div
        ref={innerRef}
        className='fixed top-0 left-0 right-0 bottom-0 bg-lime-700 z-30 flex flex-col align-center items-center pt-10 gap-5'
      >
        <Image
          alt='Shalom Ethiopia Logo'
          src='/images/shalom_ethiopia_logo.webp'
          width={200}
          height={200}
          priority
        />
        <MobileNavLink hideMobileMenu={hideMobileMenu} href='/' label='Home' />
        <MobileNavLink
          hideMobileMenu={hideMobileMenu}
          href='/about-ethiopia'
          label='About Ethiopia'
        />
        <MobileNavLink
          hideMobileMenu={hideMobileMenu}
          href='/our-tours'
          label='Our Tours'
        />
        <RequestBooking />
      </div>
    </>
  );
};

export default MobileMenu;
