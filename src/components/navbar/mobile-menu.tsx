"use-client";
import React, { useState } from "react";
import NavLink from "./navlink";
import RequestBooking from "./request-booking";
import Image from "next/image";

type PropTypes = {
  innerRef: React.MutableRefObject<null>;
};

const MobileMenu = ({ innerRef }: PropTypes) => {
  return (
    <>
      <div
        ref={innerRef}
        className='fixed top-0 left-0 right-0 bottom-0 bg-lime-700 z-30 flex flex-col align-center items-center pt-10 gap-5'
      >
        <Image
          alt='Shalom Ethiopia Logo'
          src='/images/temp_logo.png'
          width={200}
          height={200}
          priority
        />
        <NavLink href='/' label='Home' />
        <NavLink href='/about-ethiopia' label='About Ethiopia' />
        <NavLink href='/our-tours' label='Our Tours' />
        <RequestBooking />
      </div>
    </>
  );
};

export default MobileMenu;
